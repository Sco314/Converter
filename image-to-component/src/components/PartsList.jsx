import React from 'react';

export default function PartsList({ manifest, groups, selectedPart, onPartSelect }) {
  if (!manifest || manifest.length === 0) {
    return (
      <div>
        <h2>Parts</h2>
        <p style={{ fontSize: '0.75rem', color: 'var(--txt3)' }}>
          No parts identified. Add an API key to enable Claude analysis.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Parts ({manifest.length})</h2>
      <div className="parts-list">
        {manifest.map((part) => {
          const isSelected = selectedPart?.name === part.name;
          const wasReplaced = groups?.[part.name]?.replaced;

          return (
            <div
              key={part.name}
              className={`part-item ${isSelected ? 'selected' : ''}`}
              onClick={() => onPartSelect(part)}
            >
              <span style={{ fontSize: '0.7rem' }}>
                {wasReplaced ? '🔄' : part.detail_quality === 'high' ? '✅' : part.detail_quality === 'medium' ? '⚠️' : '⚠️'}
              </span>
              <span style={{ flex: 1, fontSize: '0.72rem' }}>
                {part.name.replace(/_/g, ' ')}
              </span>
              <span className={`part-badge ${part.detail_quality}`}>
                {part.detail_quality}
              </span>
              <span className="part-type">{part.type}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
