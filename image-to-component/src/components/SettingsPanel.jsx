import React, { useState, useEffect } from 'react';
import { PRESETS } from '../pipeline/tracer.js';

const PRESET_KEYS = Object.keys(PRESETS);

const PIPELINE_MODES = {
  quick: {
    label: 'Quick Trace',
    description: 'Fast geometry extraction — outlines, curves, and colors only',
  },
  smart: {
    label: 'Smart Trace',
    description: 'Geometry + AI part identification, detail cleanup, and refinement',
  },
};

export default function SettingsPanel({ pipelineMode, onModeChange, preset, onPresetChange, onSettingsChange, apiKey, onApiKeyChange }) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [settings, setSettings] = useState(PRESETS[preset]);

  useEffect(() => {
    setSettings(PRESETS[preset]);
    onSettingsChange(null);
  }, [preset]);

  const updateSetting = (key, value) => {
    const updated = { ...settings, [key]: value };
    setSettings(updated);
    onSettingsChange(updated);
  };

  return (
    <div>
      <h2>Settings</h2>

      {/* Pipeline Mode Selector */}
      <div className="panel-label mb-sm">Pipeline Mode</div>
      <div className="preset-selector" style={{ marginBottom: '1.25rem' }}>
        {Object.entries(PIPELINE_MODES).map(([key, mode]) => (
          <button
            key={key}
            className={`preset-btn ${pipelineMode === key ? 'active' : ''}`}
            onClick={() => onModeChange(key)}
          >
            <span className="preset-label">{mode.label}</span>
            <span className="preset-desc">{mode.description}</span>
          </button>
        ))}
      </div>

      {/* API Key — only show for Smart Trace */}
      {pipelineMode === 'smart' && (
        <>
          <div className="api-notice">
            Smart Trace uses AI vision to identify parts, clean up fine details, and enable click-to-refine.
            An API key is required for this mode.
          </div>
          <div className="setting-item mb-md">
            <label>API Key</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => onApiKeyChange(e.target.value)}
              placeholder="sk-ant-..."
            />
          </div>
        </>
      )}

      {/* Image Type Presets */}
      <div className="panel-label mb-sm">Image Type</div>
      <div className="preset-selector">
        {PRESET_KEYS.map((key) => (
          <button
            key={key}
            className={`preset-btn ${preset === key ? 'active' : ''}`}
            onClick={() => onPresetChange(key)}
          >
            <span className="preset-label">{PRESETS[key].label}</span>
            <span className="preset-desc">{PRESETS[key].description}</span>
          </button>
        ))}
      </div>

      {/* Advanced toggle */}
      <button
        className="btn btn-sm"
        onClick={() => setShowAdvanced(!showAdvanced)}
        style={{ marginBottom: '0.75rem' }}
      >
        {showAdvanced ? '▾ Hide' : '▸ Show'} Advanced Settings
      </button>

      {showAdvanced && (
        <div className="settings-grid">
          <SettingSlider label="Filter Speckle" value={settings.filterSpeckle} min={0} max={20} step={1}
            onChange={(v) => updateSetting('filterSpeckle', v)} />
          <SettingSlider label="Color Precision" value={settings.colorPrecision} min={1} max={10} step={1}
            onChange={(v) => updateSetting('colorPrecision', v)} />
          <SettingSlider label="Layer Difference" value={settings.layerDifference} min={1} max={64} step={1}
            onChange={(v) => updateSetting('layerDifference', v)} />
          <SettingSlider label="Corner Threshold" value={settings.cornerThreshold} min={0} max={180} step={5}
            onChange={(v) => updateSetting('cornerThreshold', v)} />
          <SettingSlider label="Length Threshold" value={settings.lengthThreshold} min={1} max={10} step={0.5}
            onChange={(v) => updateSetting('lengthThreshold', v)} />
          <SettingSlider label="Max Iterations" value={settings.maxIterations} min={1} max={20} step={1}
            onChange={(v) => updateSetting('maxIterations', v)} />
          <SettingSlider label="Splice Threshold" value={settings.spliceThreshold} min={0} max={180} step={5}
            onChange={(v) => updateSetting('spliceThreshold', v)} />
          <SettingSlider label="Path Precision" value={settings.pathPrecision} min={1} max={8} step={1}
            onChange={(v) => updateSetting('pathPrecision', v)} />
        </div>
      )}
    </div>
  );
}

function SettingSlider({ label, value, min, max, step, onChange }) {
  return (
    <div className="setting-item">
      <label>{label}: {value}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  );
}
