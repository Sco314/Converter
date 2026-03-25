import React from 'react';

export default function PreviewPanel({ imageUrl, svgString, manifest }) {
  return (
    <div className="card">
      <h2>Processing</h2>
      <div className="split-view">
        <div className="panel">
          <div className="panel-label">Original Image</div>
          {imageUrl && <img src={imageUrl} alt="Original" />}
        </div>
        <div className="panel">
          <div className="panel-label">Traced Output</div>
          {svgString && (
            <div dangerouslySetInnerHTML={{ __html: svgString }} />
          )}
        </div>
      </div>
      {manifest && (
        <p style={{ fontSize: '0.75rem', color: 'var(--teal)', marginTop: '0.75rem', textAlign: 'center' }}>
          ✓ Identified {manifest.length} parts
        </p>
      )}
    </div>
  );
}
