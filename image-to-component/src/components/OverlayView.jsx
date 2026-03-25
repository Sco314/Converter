import React, { useState, useRef, useCallback } from 'react';
import { findClickedPart } from '../pipeline/refiner.js';

export default function OverlayView({ imageUrl, svgString, manifest, selectedPart, onPartSelect }) {
  const [opacity, setOpacity] = useState(0.7);
  const containerRef = useRef(null);

  const handleClick = useCallback((e) => {
    if (!manifest || manifest.length === 0) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const clickXPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const clickYPercent = ((e.clientY - rect.top) / rect.height) * 100;

    const part = findClickedPart(manifest, clickXPercent, clickYPercent);
    if (part) {
      onPartSelect(part);
    }
  }, [manifest, onPartSelect]);

  // Build SVG with highlight overlay for selected part
  const svgWithHighlight = useCallback(() => {
    if (!svgString || !selectedPart) return svgString;

    // Parse and add highlight
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    const group = doc.getElementById(selectedPart.name);

    if (group) {
      // Add a highlight rect around the selected group
      const svgEl = doc.querySelector('svg');
      const vb = svgEl.getAttribute('viewBox');
      if (vb) {
        const [, , vbW, vbH] = vb.split(/[\s,]+/).map(Number);
        const x = (selectedPart.bbox.x / 100) * vbW;
        const y = (selectedPart.bbox.y / 100) * vbH;
        const w = (selectedPart.bbox.w / 100) * vbW;
        const h = (selectedPart.bbox.h / 100) * vbH;

        const highlight = doc.createElementNS('http://www.w3.org/2000/svg', 'rect');
        highlight.setAttribute('x', x);
        highlight.setAttribute('y', y);
        highlight.setAttribute('width', w);
        highlight.setAttribute('height', h);
        highlight.setAttribute('fill', 'none');
        highlight.setAttribute('stroke', '#f5a623');
        highlight.setAttribute('stroke-width', Math.max(vbW, vbH) * 0.005);
        highlight.setAttribute('stroke-dasharray', `${Math.max(vbW, vbH) * 0.01}`);
        highlight.setAttribute('opacity', '0.9');
        svgEl.appendChild(highlight);
      }
    }

    const serializer = new XMLSerializer();
    return serializer.serializeToString(doc.documentElement);
  }, [svgString, selectedPart]);

  return (
    <div>
      <h2>Review</h2>
      <div className="opacity-control">
        <span>Overlay:</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={opacity}
          onChange={(e) => setOpacity(parseFloat(e.target.value))}
        />
        <span>{Math.round(opacity * 100)}%</span>
      </div>
      <div
        className="overlay-container"
        ref={containerRef}
        onClick={handleClick}
      >
        {imageUrl && <img src={imageUrl} alt="Original" />}
        {svgString && (
          <div
            className="svg-overlay interactive"
            style={{ opacity }}
            dangerouslySetInnerHTML={{ __html: svgWithHighlight() || '' }}
          />
        )}
      </div>
      {selectedPart && (
        <p style={{ fontSize: '0.7rem', color: 'var(--amber)', marginTop: '0.5rem' }}>
          Selected: {selectedPart.name} ({selectedPart.type})
        </p>
      )}
    </div>
  );
}
