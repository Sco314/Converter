import React, { useState } from 'react';

export default function ExportPanel({ componentCode, componentName, onNameChange, svgString }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(componentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = componentCode;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadJsx = () => {
    const fileName = componentName
      ? componentName.replace(/([A-Z])/g, (m, c, i) => (i ? '-' : '') + c.toLowerCase()) + '.jsx'
      : 'component.jsx';
    downloadFile(componentCode, fileName, 'text/javascript');
  };

  const handleDownloadSvg = () => {
    if (svgString) {
      const fileName = componentName
        ? componentName.replace(/([A-Z])/g, (m, c, i) => (i ? '-' : '') + c.toLowerCase()) + '.svg'
        : 'component.svg';
      downloadFile(svgString, fileName, 'image/svg+xml');
    }
  };

  return (
    <div className="card">
      <h2>Export Component</h2>

      <div className="export-options">
        <div className="setting-item">
          <label>Component Name</label>
          <input
            type="text"
            value={componentName}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="MyComponent"
          />
        </div>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <div className="panel-label">Generated React Component</div>
        <div className="code-preview">
          <pre>{componentCode}</pre>
        </div>
      </div>

      <div className="flex gap-sm mt-md" style={{ flexWrap: 'wrap' }}>
        <button className="btn btn-primary" onClick={handleDownloadJsx}>
          Download .jsx
        </button>
        <button className="btn" onClick={handleCopy}>
          {copied ? '✓ Copied!' : 'Copy to Clipboard'}
        </button>
        <button className="btn" onClick={handleDownloadSvg}>
          Download .svg
        </button>
      </div>
    </div>
  );
}

function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
