# Deployment Guide — Image-to-Component Studio

## Architecture

```
GitHub Pages (frontend)  ──→  Cloudflare Worker (proxy)  ──→  Claude API
                               │
                               ├── Google token verification
                               ├── Admin check (server-side only)
                               ├── Usage tracking (KV)
                               └── Stripe payments
```

Your API key, admin emails, and payment keys live ONLY on the Cloudflare Worker.
The frontend never sees them.

---

## Step 1: Google OAuth Setup

1. Go to https://console.cloud.google.com/apis/credentials
2. Create a new OAuth 2.0 Client ID (Web application)
3. Add authorized JavaScript origins:
   - `https://sco314.github.io`
   - `http://localhost:5173` (for local dev)
4. Copy the **Client ID** (looks like `123456789.apps.googleusercontent.com`)

---

## Step 2: Cloudflare Worker Setup

### Install Wrangler
```bash
npm install -g wrangler
wrangler login
```

### Create KV Namespace
```bash
cd worker/
wrangler kv namespace create USAGE
```
Copy the output `id` into `wrangler.toml` replacing `REPLACE_WITH_KV_NAMESPACE_ID`.

### Set Secrets
```bash
wrangler secret put ANTHROPIC_API_KEY
# Paste your Claude API key

wrangler secret put GOOGLE_CLIENT_ID
# Paste the Google OAuth Client ID from Step 1

wrangler secret put ADMIN_EMAILS
# Enter: scottsandvik@gmail.com,ssandvik@hisd.com

wrangler secret put STRIPE_SECRET_KEY
# Paste your Stripe secret key (sk_live_... or sk_test_...)

wrangler secret put STRIPE_WEBHOOK_SECRET
# Paste Stripe webhook signing secret (whsec_...)

wrangler secret put STRIPE_PRICE_ID
# Paste Stripe price ID (price_...)
```

### Deploy
```bash
wrangler deploy
```

Note the worker URL (e.g., `https://converter-api.your-subdomain.workers.dev`).

---

## Step 3: Stripe Setup

1. Go to https://dashboard.stripe.com
2. Create a Product (e.g., "Converter Pro — Unlimited conversions")
3. Add a Price (e.g., $5/month recurring)
4. Copy the **Price ID** (`price_...`) — set as `STRIPE_PRICE_ID` secret
5. Set up a Webhook:
   - Endpoint: `https://converter-api.your-subdomain.workers.dev/api/stripe-webhook`
   - Events: `checkout.session.completed`, `customer.subscription.deleted`
6. Copy the **Webhook Signing Secret** (`whsec_...`) — set as `STRIPE_WEBHOOK_SECRET` secret

---

## Step 4: Frontend Build & Deploy

### Set environment variables
Create/update `.env`:
```
VITE_WORKER_URL=https://converter-api.your-subdomain.workers.dev
VITE_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID.apps.googleusercontent.com
```

### Build
```bash
npm run build
```

### Deploy to GitHub Pages
Commit and push the `dist/` folder.

---

## How It Works

### Security Model
- **API key**: stored ONLY as a Cloudflare Worker secret. Never sent to the browser.
- **Admin emails**: stored ONLY as a Worker secret. The frontend never knows who is admin.
- **Admin users** see "Unlimited" in the usage badge — same as paid users. No "admin" label.
- **Usage enforcement**: happens server-side. Client can't bypass it.
- **Google tokens**: verified server-side via Google's tokeninfo endpoint.

### User Flow
1. User visits the app → sees "Sign in with Google" in the auth bar
2. After signing in → worker checks their email and returns usage info
3. Each Smart Trace API call goes through the worker, which:
   - Verifies the Google token
   - Checks if user is admin or paid (unlimited) or free (2/day)
   - Proxies to Claude API with the secret key
   - Returns result + updated usage count
4. If a free user hits their limit → they see an "Upgrade" button → Stripe Checkout

### Rate Limits
- **Admin** (your emails): unlimited
- **Paid subscribers**: unlimited
- **Free users**: 2 conversions per day (configurable in wrangler.toml)
