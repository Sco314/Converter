import React, { useState, useEffect } from 'react';
import { PRESETS } from '../pipeline/tracer.js';

const PRESET_KEYS = Object.keys(PRESETS);

export default function SettingsPanel({ preset, onPresetChange, onSettingsChange, apiKey, onApiKeyChange }) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [settings, setSettings] = useState(PRESETS[preset]);

  useEffect(() => {
    setSettings(PRESETS[preset]);
    onSettingsChange(null); // Reset to preset defaults
  }, [preset]);

  const updateSetting = (key, value) => {
    const updated = { ...settings, [key]: value };
    setSettings(updated);
    onSettingsChange(updated);
  };

  return (
    <div>
      <h2>Settings</h2>

      {/* API Key */}
      <div className="api-notice">
        Claude API key enables automatic part identification, detail replacement, and refinement.
        Without it, only VTracer geometry output is available.
      </div>
      <div className="setting-item mb-md">
        <label>Anthropic API Key</label>
        <input
          type="password"
          value={apiKey}
          onChange={(e) => onApiKeyChange(e.target.value)}
          placeholder="sk-ant-..."
        />
      </div>

      {/* Presets */}
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
