import React, { useState } from 'react';

export default function RefinePanel({ part, onRefine, isRefining }) {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (!feedback.trim() || isRefining) return;
    onRefine(part, feedback.trim());
    setFeedback('');
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <h2 style={{ fontSize: '1.1rem' }}>Refine: {part.name.replace(/_/g, ' ')}</h2>
      <p style={{ fontSize: '0.7rem', color: 'var(--txt2)', marginBottom: '0.5rem' }}>
        {part.description}
      </p>
      <div className="refine-input">
        <input
          type="text"
          placeholder="What's wrong with this part?"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          disabled={isRefining}
        />
        <button
          className="btn btn-sm btn-primary"
          onClick={handleSubmit}
          disabled={!feedback.trim() || isRefining}
        >
          {isRefining ? 'Refining...' : 'Fix'}
        </button>
      </div>
    </div>
  );
}
