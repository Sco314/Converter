import React from 'react';
import { useAuth } from '../auth/AuthProvider.jsx';

export default function AuthBar() {
  const { user, usage, loading, signIn, signOut, workerUrl } = useAuth();

  // If no worker URL configured, don't show auth bar (local dev mode)
  if (!workerUrl) return null;

  if (loading) {
    return (
      <div className="auth-bar">
        <span className="auth-loading">Loading...</span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="auth-bar">
        <span className="auth-message">Sign in to use Smart Trace</span>
        <button className="btn btn-sm btn-google" onClick={signIn}>
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="auth-bar">
      <div className="auth-user">
        {user.picture && (
          <img src={user.picture} alt="" className="auth-avatar" referrerPolicy="no-referrer" />
        )}
        <span className="auth-name">{user.name}</span>
      </div>

      {usage && (
        <div className="auth-usage">
          {usage.unlimited ? (
            <span className="usage-badge unlimited">Unlimited</span>
          ) : (
            <span className="usage-badge">
              {usage.remaining}/{usage.limit} conversions today
            </span>
          )}
          {!usage.unlimited && usage.remaining === 0 && (
            <UpgradeButton />
          )}
        </div>
      )}

      <button className="btn btn-sm" onClick={signOut}>Sign out</button>
    </div>
  );
}

function UpgradeButton() {
  const { user, workerUrl } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const handleUpgrade = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${workerUrl}/api/checkout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${user.idToken}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error('Checkout error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="btn btn-sm btn-upgrade"
      onClick={handleUpgrade}
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Upgrade'}
    </button>
  );
}
