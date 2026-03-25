/**
 * Cloudflare Worker — API proxy for Image-to-Component Studio.
 *
 * Responsibilities:
 *  1. Verify Google ID tokens (server-side only)
 *  2. Check admin status (server-side only — never exposed to client)
 *  3. Enforce daily usage limits for free-tier users
 *  4. Proxy requests to Claude API with the secret key
 *  5. Handle Stripe checkout + webhooks for paid upgrades
 */

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';

export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return handleCors(request, env);
    }

    const url = new URL(request.url);
    const path = url.pathname;

    try {
      let response;

      if (path === '/api/analyze' && request.method === 'POST') {
        response = await handleAnalyze(request, env);
      } else if (path === '/api/usage' && request.method === 'GET') {
        response = await handleUsage(request, env);
      } else if (path === '/api/checkout' && request.method === 'POST') {
        response = await handleCheckout(request, env);
      } else if (path === '/api/stripe-webhook' && request.method === 'POST') {
        response = await handleStripeWebhook(request, env);
      } else if (path === '/api/health') {
        response = new Response(JSON.stringify({ ok: true }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        response = new Response(JSON.stringify({ error: 'Not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      return addCorsHeaders(response, request, env);
    } catch (err) {
      const response = new Response(
        JSON.stringify({ error: err.message || 'Internal server error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
      return addCorsHeaders(response, request, env);
    }
  },
};

// ─── Google Token Verification ───────────────────────────────────────────────

async function verifyGoogleToken(idToken, env) {
  // Use Google's tokeninfo endpoint to verify the token server-side
  const res = await fetch(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`
  );

  if (!res.ok) {
    throw new Error('Invalid Google token');
  }

  const payload = await res.json();

  // Verify the token was issued for our app
  if (payload.aud !== env.GOOGLE_CLIENT_ID) {
    throw new Error('Token audience mismatch');
  }

  return {
    email: payload.email,
    name: payload.name || payload.email,
    picture: payload.picture || null,
  };
}

// ─── Usage Tracking ──────────────────────────────────────────────────────────

function todayKey(email) {
  const date = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  return `usage:${email}:${date}`;
}

async function getUsageCount(email, env) {
  const val = await env.USAGE.get(todayKey(email));
  return val ? parseInt(val, 10) : 0;
}

async function incrementUsage(email, env) {
  const key = todayKey(email);
  const current = await getUsageCount(email, env);
  // Expire after 48 hours to auto-clean old entries
  await env.USAGE.put(key, String(current + 1), { expirationTtl: 172800 });
  return current + 1;
}

async function hasPaidPlan(email, env) {
  const val = await env.USAGE.get(`paid:${email}`);
  if (!val) return false;
  const data = JSON.parse(val);
  return data.active && (!data.expires || Date.now() < data.expires);
}

function isAdmin(email, env) {
  const adminEmails = (env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase());
  return adminEmails.includes(email.toLowerCase());
}

async function getRemainingConversions(email, env) {
  if (isAdmin(email, env)) {
    return { remaining: null, limit: null, unlimited: true };
  }

  if (await hasPaidPlan(email, env)) {
    return { remaining: null, limit: null, unlimited: true };
  }

  const limit = parseInt(env.FREE_DAILY_LIMIT || '2', 10);
  const used = await getUsageCount(email, env);
  return { remaining: Math.max(0, limit - used), limit, unlimited: false };
}

// ─── Auth Helper ─────────────────────────────────────────────────────────────

async function authenticateRequest(request, env) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Missing or invalid Authorization header');
  }

  const idToken = authHeader.slice(7);
  return await verifyGoogleToken(idToken, env);
}

// ─── Route Handlers ──────────────────────────────────────────────────────────

async function handleAnalyze(request, env) {
  const user = await authenticateRequest(request, env);

  // Check usage limits
  const quota = await getRemainingConversions(user.email, env);
  if (!quota.unlimited && quota.remaining <= 0) {
    return new Response(
      JSON.stringify({
        error: 'Daily limit reached. Upgrade to continue.',
        code: 'LIMIT_REACHED',
        remaining: 0,
      }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Proxy the request to Claude API
  const body = await request.json();

  const claudeRes = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify(body),
  });

  if (!claudeRes.ok) {
    const errText = await claudeRes.text();
    return new Response(
      JSON.stringify({ error: `Claude API error: ${claudeRes.status}`, details: errText }),
      { status: claudeRes.status, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Increment usage after successful call
  await incrementUsage(user.email, env);

  const claudeData = await claudeRes.json();
  const updatedQuota = await getRemainingConversions(user.email, env);

  return new Response(
    JSON.stringify({
      ...claudeData,
      _usage: {
        remaining: updatedQuota.remaining,
        limit: updatedQuota.limit,
        unlimited: updatedQuota.unlimited,
      },
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}

async function handleUsage(request, env) {
  const user = await authenticateRequest(request, env);
  const quota = await getRemainingConversions(user.email, env);

  return new Response(
    JSON.stringify({
      remaining: quota.remaining,
      limit: quota.limit,
      unlimited: quota.unlimited,
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}

// ─── Stripe Checkout ─────────────────────────────────────────────────────────

async function handleCheckout(request, env) {
  const user = await authenticateRequest(request, env);

  const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'mode': 'subscription',
      'line_items[0][price]': env.STRIPE_PRICE_ID,
      'line_items[0][quantity]': '1',
      'customer_email': user.email,
      'success_url': `${getAllowedOrigin(request, env)}/Converter/image-to-component/dist/?checkout=success`,
      'cancel_url': `${getAllowedOrigin(request, env)}/Converter/image-to-component/dist/?checkout=cancel`,
      'metadata[user_email]': user.email,
    }),
  });

  const session = await stripeRes.json();

  if (!stripeRes.ok) {
    return new Response(
      JSON.stringify({ error: 'Failed to create checkout session', details: session }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({ url: session.url }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}

async function handleStripeWebhook(request, env) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  // Verify webhook signature
  // Note: For production, implement proper HMAC verification.
  // For now, we verify the event by fetching it from Stripe.
  let event;
  try {
    event = JSON.parse(body);
  } catch {
    return new Response('Invalid payload', { status: 400 });
  }

  // Verify the event exists on Stripe
  const verifyRes = await fetch(`https://api.stripe.com/v1/events/${event.id}`, {
    headers: { 'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}` },
  });

  if (!verifyRes.ok) {
    return new Response('Event verification failed', { status: 400 });
  }

  const verifiedEvent = await verifyRes.json();

  if (verifiedEvent.type === 'checkout.session.completed') {
    const session = verifiedEvent.data.object;
    const email = session.metadata?.user_email || session.customer_email;

    if (email) {
      // Grant unlimited access — 30-day rolling window
      const expires = Date.now() + 30 * 24 * 60 * 60 * 1000;
      await env.USAGE.put(
        `paid:${email}`,
        JSON.stringify({ active: true, expires, subscription_id: session.subscription }),
        { expirationTtl: 31 * 24 * 60 * 60 } // KV TTL: 31 days
      );
    }
  }

  if (verifiedEvent.type === 'customer.subscription.deleted') {
    const subscription = verifiedEvent.data.object;
    const email = subscription.metadata?.user_email;
    if (email) {
      await env.USAGE.delete(`paid:${email}`);
    }
  }

  return new Response('ok', { status: 200 });
}

// ─── CORS ────────────────────────────────────────────────────────────────────

function getAllowedOrigin(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim());
  if (allowed.includes(origin)) return origin;
  return allowed[0] || '';
}

function handleCors(request, env) {
  const origin = getAllowedOrigin(request, env);
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}

function addCorsHeaders(response, request, env) {
  const origin = getAllowedOrigin(request, env);
  const newHeaders = new Headers(response.headers);
  newHeaders.set('Access-Control-Allow-Origin', origin);
  newHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  newHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}
