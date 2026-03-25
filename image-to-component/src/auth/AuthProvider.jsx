import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

// Worker URL — set via env var at build time, fallback for local dev
const WORKER_URL = import.meta.env.VITE_WORKER_URL || '';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);       // { email, name, picture, idToken }
  const [usage, setUsage] = useState(null);      // { remaining, limit, unlimited }
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch usage info from worker
  const fetchUsage = useCallback(async (idToken) => {
    if (!WORKER_URL) return;
    try {
      const res = await fetch(`${WORKER_URL}/api/usage`, {
        headers: { 'Authorization': `Bearer ${idToken}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUsage(data);
      }
    } catch (err) {
      console.warn('Failed to fetch usage:', err.message);
    }
  }, []);

  // Initialize Google Sign-In
  useEffect(() => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    if (!clientId) {
      setLoading(false);
      return;
    }

    // Wait for Google Identity Services script to load
    const initGoogle = () => {
      if (!window.google?.accounts?.id) {
        setTimeout(initGoogle, 100);
        return;
      }

      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
        auto_select: true, // Auto sign-in returning users
      });

      // Render the sign-in button (hidden — we use our own UI)
      // But trigger One Tap for returning users
      window.google.accounts.id.prompt();
      setLoading(false);
    };

    initGoogle();
  }, []);

  const handleCredentialResponse = useCallback((response) => {
    const idToken = response.credential;
    // Decode the JWT payload (base64url) to get user info for display
    // This is safe — actual verification happens server-side in the worker
    try {
      const payload = JSON.parse(atob(idToken.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
      const userData = {
        email: payload.email,
        name: payload.name || payload.email,
        picture: payload.picture || null,
        idToken,
      };
      setUser(userData);
      setError(null);
      localStorage.setItem('converter_user', JSON.stringify({
        email: userData.email,
        name: userData.name,
        picture: userData.picture,
      }));
      fetchUsage(idToken);
    } catch (err) {
      setError('Failed to parse sign-in response');
    }
  }, [fetchUsage]);

  const signIn = useCallback(() => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    if (!clientId || !window.google?.accounts?.id) {
      setError('Google Sign-In not configured');
      return;
    }
    window.google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        // Fallback: use the button flow
        // Create a temporary div for Google's rendered button
        const div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.top = '50%';
        div.style.left = '50%';
        div.style.transform = 'translate(-50%, -50%)';
        div.style.zIndex = '10000';
        div.style.background = '#1a1a2e';
        div.style.padding = '2rem';
        div.style.borderRadius = '12px';
        div.style.boxShadow = '0 8px 32px rgba(0,0,0,0.6)';
        div.id = 'google-signin-popup';
        document.body.appendChild(div);

        window.google.accounts.id.renderButton(div, {
          theme: 'filled_black',
          size: 'large',
          width: 280,
        });

        // Remove popup on outside click
        const backdrop = document.createElement('div');
        backdrop.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:9999';
        backdrop.onclick = () => { backdrop.remove(); div.remove(); };
        document.body.appendChild(backdrop);
      }
    });
  }, []);

  const signOut = useCallback(() => {
    if (window.google?.accounts?.id) {
      window.google.accounts.id.disableAutoSelect();
    }
    setUser(null);
    setUsage(null);
    localStorage.removeItem('converter_user');
  }, []);

  // Update usage after an API call completes
  const updateUsageFromResponse = useCallback((usageData) => {
    if (usageData) {
      setUsage(usageData);
    }
  }, []);

  const value = {
    user,
    usage,
    loading,
    error,
    signIn,
    signOut,
    fetchUsage,
    updateUsageFromResponse,
    workerUrl: WORKER_URL,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
