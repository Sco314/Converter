import React, { useReducer, useCallback } from 'react';
import ImageUploader from './components/ImageUploader.jsx';
import SettingsPanel from './components/SettingsPanel.jsx';
import PreviewPanel from './components/PreviewPanel.jsx';
import OverlayView from './components/OverlayView.jsx';
import PartsList from './components/PartsList.jsx';
import RefinePanel from './components/RefinePanel.jsx';
import ExportPanel from './components/ExportPanel.jsx';
import { PRESETS, traceImage, fileToRawBase64 } from './pipeline/tracer.js';
import { analyzeImage, generateReplacement } from './pipeline/analyzer.js';
import { mergeSVGs } from './pipeline/merger.js';
import { refineAndReplace } from './pipeline/refiner.js';
import { exportComponent } from './pipeline/exporter.js';

const STAGES = ['upload', 'tracing', 'analyzing', 'review', 'export'];

const PIPELINE_MODES = {
  quick: {
    label: 'Quick Trace',
    description: 'Fast geometry extraction — outlines, curves, and colors',
  },
  smart: {
    label: 'Smart Trace',
    description: 'Geometry + AI part identification, detail cleanup, and refinement',
  },
};

const initialState = {
  stage: 'upload',
  pipelineMode: 'smart',
  imageFile: null,
  imageUrl: null,
  imageBase64: null,
  mediaType: null,
  preset: 'photograph',
  customSettings: null,
  vtracerSvg: null,
  manifest: null,
  replacements: {},
  mergedSvg: null,
  groups: null,
  selectedPart: null,
  componentName: '',
  componentCode: null,
  error: null,
  progress: '',
  apiKey: localStorage.getItem('anthropic_api_key') || import.meta.env.VITE_ANTHROPIC_API_KEY || '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_IMAGE':
      return {
        ...state,
        imageFile: action.file,
        imageUrl: URL.createObjectURL(action.file),
        mediaType: action.file.type,
        componentName: toPascalCase(action.file.name.replace(/\.[^.]+$/, '')),
        error: null,
      };
    case 'SET_PIPELINE_MODE':
      return { ...state, pipelineMode: action.mode };
    case 'SET_PRESET':
      return { ...state, preset: action.preset };
    case 'SET_CUSTOM_SETTINGS':
      return { ...state, customSettings: action.settings };
    case 'SET_API_KEY':
      localStorage.setItem('anthropic_api_key', action.key);
      return { ...state, apiKey: action.key };
    case 'SET_STAGE':
      return { ...state, stage: action.stage, error: null };
    case 'SET_PROGRESS':
      return { ...state, progress: action.progress };
    case 'SET_VTRACER_SVG':
      return { ...state, vtracerSvg: action.svg };
    case 'SET_IMAGE_BASE64':
      return { ...state, imageBase64: action.base64 };
    case 'SET_MANIFEST':
      return { ...state, manifest: action.manifest };
    case 'SET_REPLACEMENTS':
      return { ...state, replacements: action.replacements };
    case 'SET_MERGED':
      return { ...state, mergedSvg: action.svg, groups: action.groups };
    case 'SET_SELECTED_PART':
      return { ...state, selectedPart: action.part };
    case 'UPDATE_MERGED_SVG':
      return { ...state, mergedSvg: action.svg };
    case 'SET_COMPONENT_NAME':
      return { ...state, componentName: action.name };
    case 'SET_COMPONENT_CODE':
      return { ...state, componentCode: action.code };
    case 'SET_ERROR':
      return { ...state, error: action.error, progress: '' };
    case 'RESET':
      return { ...initialState, apiKey: state.apiKey };
    default:
      return state;
  }
}

function toPascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('');
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleProcess = useCallback(async () => {
    if (!state.imageFile) return;

    try {
      const isSmartMode = state.pipelineMode === 'smart' && state.apiKey;

      // Stage 1: Trace geometry
      dispatch({ type: 'SET_STAGE', stage: 'tracing' });
      dispatch({ type: 'SET_PROGRESS', progress: 'Extracting geometry...' });

      const options = state.customSettings || PRESETS[state.preset];
      const svg = await traceImage(state.imageFile, options);
      dispatch({ type: 'SET_VTRACER_SVG', svg });
      console.log('✅ Geometry extraction complete');

      // Get base64 for AI analysis
      const base64 = await fileToRawBase64(state.imageFile);
      dispatch({ type: 'SET_IMAGE_BASE64', base64 });

      // Quick Trace mode — skip AI analysis
      if (!isSmartMode) {
        dispatch({ type: 'SET_STAGE', stage: 'review' });
        dispatch({ type: 'SET_PROGRESS', progress: '' });
        dispatch({ type: 'SET_MANIFEST', manifest: [] });
        dispatch({ type: 'SET_MERGED', svg, groups: {} });
        return;
      }

      // Smart Trace — AI part identification
      dispatch({ type: 'SET_STAGE', stage: 'analyzing' });
      dispatch({ type: 'SET_PROGRESS', progress: 'Identifying parts...' });

      const manifest = await analyzeImage(base64, state.mediaType, state.apiKey);
      dispatch({ type: 'SET_MANIFEST', manifest });
      console.log(`✅ Identified ${manifest.length} parts`);

      // Auto-improve low-detail parts
      const lowDetailParts = manifest.filter(p => p.detail_quality === 'low');
      const replacements = {};

      for (let i = 0; i < lowDetailParts.length; i++) {
        const part = lowDetailParts[i];
        dispatch({
          type: 'SET_PROGRESS',
          progress: `Improving detail ${i + 1}/${lowDetailParts.length}: ${part.name.replace(/_/g, ' ')}...`,
        });
        try {
          replacements[part.name] = await generateReplacement(base64, state.mediaType, part, state.apiKey);
          console.log(`✅ Improved ${part.name}`);
        } catch (err) {
          console.log(`❌ Failed to improve ${part.name}: ${err.message}`);
        }
      }

      dispatch({ type: 'SET_REPLACEMENTS', replacements });

      // Merge geometry with identified parts
      dispatch({ type: 'SET_PROGRESS', progress: 'Assembling component...' });
      const { svg: mergedSvg, groups } = mergeSVGs(svg, manifest, replacements);
      dispatch({ type: 'SET_MERGED', svg: mergedSvg, groups });
      console.log('✅ Assembly complete');

      // Move to review
      dispatch({ type: 'SET_STAGE', stage: 'review' });
      dispatch({ type: 'SET_PROGRESS', progress: '' });
    } catch (err) {
      console.log('❌ Pipeline error:', err.message);
      dispatch({ type: 'SET_ERROR', error: err.message });
    }
  }, [state.imageFile, state.preset, state.customSettings, state.apiKey, state.mediaType, state.pipelineMode]);

  const handleRefine = useCallback(async (part, feedback) => {
    if (!state.apiKey || !state.mergedSvg) return;

    dispatch({ type: 'SET_PROGRESS', progress: `Refining ${part.name.replace(/_/g, ' ')}...` });
    try {
      const updatedSvg = await refineAndReplace(
        state.imageBase64,
        state.mediaType,
        state.mergedSvg,
        part,
        feedback,
        state.apiKey
      );
      dispatch({ type: 'UPDATE_MERGED_SVG', svg: updatedSvg });
      dispatch({ type: 'SET_PROGRESS', progress: '' });
      console.log(`✅ Refined ${part.name}`);
    } catch (err) {
      console.log(`❌ Refinement failed: ${err.message}`);
      dispatch({ type: 'SET_ERROR', error: err.message });
    }
  }, [state.apiKey, state.mergedSvg, state.imageBase64, state.mediaType]);

  const handleExport = useCallback(() => {
    dispatch({ type: 'SET_STAGE', stage: 'export' });
    const code = exportComponent(
      state.mergedSvg || state.vtracerSvg,
      state.manifest || [],
      state.componentName || 'GeneratedComponent'
    );
    dispatch({ type: 'SET_COMPONENT_CODE', code });
  }, [state.mergedSvg, state.vtracerSvg, state.manifest, state.componentName]);

  const stageIndex = STAGES.indexOf(state.stage);

  return (
    <div className="app-container">
      <h1>Image-to-Component Studio</h1>
      <p className="subtitle">Convert photographs into interactive React SVG components</p>

      {/* Stage Bar */}
      <div className="stage-bar">
        {STAGES.map((s, i) => (
          <React.Fragment key={s}>
            {i > 0 && <span className="stage-arrow">→</span>}
            <div className={`stage-step ${i === stageIndex ? 'active' : ''} ${i < stageIndex ? 'completed' : ''}`}>
              {i < stageIndex ? '✓ ' : ''}{s.charAt(0).toUpperCase() + s.slice(1)}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Error display */}
      {state.error && (
        <div className="card" style={{ borderColor: 'var(--red)', marginBottom: '1rem' }}>
          <p style={{ color: 'var(--red)', fontSize: '0.8rem' }}>❌ {state.error}</p>
          <button className="btn btn-sm mt-sm" onClick={() => dispatch({ type: 'SET_ERROR', error: null })}>
            Dismiss
          </button>
        </div>
      )}

      {/* Progress */}
      {state.progress && (
        <div className="card" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <div className="flex gap-sm" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <span className="spinner" />
            <span style={{ fontSize: '0.8rem', color: 'var(--txt2)' }}>{state.progress}</span>
          </div>
        </div>
      )}

      {/* Upload Stage */}
      {state.stage === 'upload' && (
        <div>
          <div className="card">
            <ImageUploader
              onImageSelect={(file) => dispatch({ type: 'SET_IMAGE', file })}
              imageUrl={state.imageUrl}
            />
          </div>
          <div className="card">
            <SettingsPanel
              pipelineMode={state.pipelineMode}
              onModeChange={(mode) => dispatch({ type: 'SET_PIPELINE_MODE', mode })}
              preset={state.preset}
              onPresetChange={(p) => dispatch({ type: 'SET_PRESET', preset: p })}
              onSettingsChange={(s) => dispatch({ type: 'SET_CUSTOM_SETTINGS', settings: s })}
              apiKey={state.apiKey}
              onApiKeyChange={(key) => dispatch({ type: 'SET_API_KEY', key })}
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button
              className="btn btn-primary"
              disabled={!state.imageFile}
              onClick={handleProcess}
            >
              Process Image
            </button>
          </div>
        </div>
      )}

      {/* Tracing / Analyzing Stage */}
      {(state.stage === 'tracing' || state.stage === 'analyzing') && state.vtracerSvg && (
        <PreviewPanel
          imageUrl={state.imageUrl}
          svgString={state.vtracerSvg}
          manifest={state.manifest}
        />
      )}

      {/* Review Stage */}
      {state.stage === 'review' && (
        <div>
          <div className="card">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '1rem' }}>
              <OverlayView
                imageUrl={state.imageUrl}
                svgString={state.mergedSvg || state.vtracerSvg}
                manifest={state.manifest || []}
                selectedPart={state.selectedPart}
                onPartSelect={(part) => dispatch({ type: 'SET_SELECTED_PART', part })}
              />
              <div>
                <PartsList
                  manifest={state.manifest || []}
                  groups={state.groups}
                  selectedPart={state.selectedPart}
                  onPartSelect={(part) => dispatch({ type: 'SET_SELECTED_PART', part })}
                />
                {state.selectedPart && state.apiKey && (
                  <RefinePanel
                    part={state.selectedPart}
                    onRefine={handleRefine}
                    isRefining={!!state.progress}
                  />
                )}
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button className="btn" onClick={() => { dispatch({ type: 'SET_STAGE', stage: 'upload' }); }} style={{ marginRight: '0.5rem' }}>
              ← Back
            </button>
            <button className="btn btn-primary" onClick={handleExport}>
              Accept & Export →
            </button>
          </div>
        </div>
      )}

      {/* Export Stage */}
      {state.stage === 'export' && (
        <div>
          <ExportPanel
            componentCode={state.componentCode}
            componentName={state.componentName}
            onNameChange={(name) => {
              dispatch({ type: 'SET_COMPONENT_NAME', name });
              // Regenerate code with new name
              const code = exportComponent(
                state.mergedSvg || state.vtracerSvg,
                state.manifest || [],
                name || 'GeneratedComponent'
              );
              dispatch({ type: 'SET_COMPONENT_CODE', code });
            }}
            svgString={state.mergedSvg || state.vtracerSvg}
          />
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button className="btn" onClick={() => dispatch({ type: 'SET_STAGE', stage: 'review' })}>
              ← Back to Review
            </button>
            <button className="btn" onClick={() => dispatch({ type: 'RESET' })} style={{ marginLeft: '0.5rem' }}>
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
