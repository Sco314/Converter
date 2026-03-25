# Image-to-Component Studio — Claude Code Handoff Document

**Project:** SVG Component Pipeline  
**Author:** Scott (Hallsville ISD Process Technology)  
**Date:** 2026-03-24  
**Purpose:** Build a tool that converts photographs of industrial equipment into clean, interactive, reusable React SVG components.

---

## 1. Problem Statement

Building interactive instrumentation training simulators requires SVG components of real industrial equipment (transmitters, tanks, valves, PLCs, multimeters, etc.). Current options all fail:

- **AI-generated SVG from description:** Gets structure right but proportions, curves, and visual fidelity are poor. Requires multiple rounds of manual correction.
- **Raster-to-vector tracers (Potrace, custom marching squares):** Produce thousands of tiny path fragments with no semantic structure. Unusable as interactive components.
- **VTracer:** Produces much better traces — accurate proportions, Bézier curves, compact output — but still outputs flat bags of colored paths with no naming, grouping, or interactivity.
- **Commercial tools (Vector Magic):** Best visual quality but expensive, still no semantic structure, and not automatable.

**The gap:** No tool takes a photo and produces a *component* — an SVG with named parts, logical groups, clean geometry, and dynamic prop hooks.

---

## 2. Solution Architecture

A two-engine pipeline:

```
┌─────────────┐     ┌───────────────┐     ┌──────────────┐     ┌───────────────┐
│  Upload      │     │  VTracer      │     │  Claude API  │     │  Merge +      │
│  Photo       │────▶│  WASM/Node    │────▶│  Vision      │────▶│  Export       │
│              │     │  (geometry)   │     │  (semantics) │     │  (component)  │
└─────────────┘     └───────────────┘     └──────────────┘     └───────────────┘
       │                    │                     │                     │
       │              Accurate SVG          Part manifest         React component
       │              with curves           with names,           with named groups,
       │              and colors            bounding boxes,       props, interactivity
       │                                    replacement SVG
       │                                                               │
       ▼                                                               ▼
  Original photo                                              ┌───────────────┐
  kept as reference                                           │  User Refine  │
  for comparison                                              │  Click part,  │
                                                              │  describe fix │
                                                              └───────────────┘
```

### Engine 1: VTracer (Geometry)
- Handles: accurate outlines, proportions, color regions, Bézier curve fitting
- Input: raster image (PNG/JPG)
- Output: compact SVG with `<path>` elements using real curves
- Why: O(n) algorithm, stacking strategy (no holes), handles photos well

### Engine 2: Claude API Vision (Semantics)
- Handles: identifying parts, naming them, recognizing what things are, writing clean replacement SVG for fine details
- Input: original photo + VTracer SVG
- Output: JSON manifest of identified parts + replacement SVG snippets for blurry/blobby elements
- Why: understands "this is a screw terminal" vs "this is a blob of gray pixels"

### Merge Engine
- Matches Claude's identified parts to VTracer's SVG paths by bounding box overlap
- Wraps matched paths in named `<g>` groups
- Replaces blobby fine details (screws, text, symbols) with Claude's clean SVG
- Adds `id` attributes and prop hooks

### User Refinement Loop
- Overlay improved SVG on original photo for comparison
- Click any part that's still wrong
- Text input: "what's wrong with this part?"
- Claude API regenerates just that element
- Iterate until satisfied

---

## 3. Technology Stack

### Runtime
- **Node.js** for CLI/server operations
- **React** for the web UI (component preview, refinement interface)
- **Vite** for dev server and bundling

### VTracer Integration — Two Options (try in order)

**Option A: `@neplex/vectorizer` (Node.js native binding)**
```bash
npm install @neplex/vectorizer
```
```javascript
const { vectorize, ColorMode, Hierarchical, PathSimplifyMode } = require('@neplex/vectorizer');
const fs = require('fs');

const buffer = fs.readFileSync('transmitter.png');
const svg = await vectorize(buffer, {
  colorMode: ColorMode.Color,
  hierarchical: Hierarchical.Stacked,
  mode: PathSimplifyMode.Spline,
  filterSpeckle: 4,
  colorPrecision: 6,
  layerDifference: 16,
  cornerThreshold: 60,
  lengthThreshold: 4.0,
  maxIterations: 10,
  spliceThreshold: 45,
  pathPrecision: 3,
});
fs.writeFileSync('output.svg', svg);
```

**Option B: WASM in browser (AlansCodeLog/vectortracer)**
```bash
npm install @alanscodelog/vectortracer
```
```javascript
import { imageDataToSvg } from '@alanscodelog/vectortracer';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// ... draw image to canvas ...
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const svgString = await imageDataToSvg(imageData, {
  colorMode: 'color',
  hierarchical: 'stacked',
  filterSpeckle: 4,
  colorPrecision: 6,
  // ... same options as above
});
```

**Option C: Build WASM from source (fallback)**
```bash
git clone https://github.com/visioncortex/vtracer.git
cd vtracer/webapp
wasm-pack build
```

### Claude API Integration
```javascript
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.ANTHROPIC_API_KEY,
    'anthropic-version': '2023-06-01',
  },
  body: JSON.stringify({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4096,
    messages: [{ role: 'user', content: [ /* see prompts below */ ] }],
  }),
});
```

---

## 4. File Structure

```
image-to-component/
├── package.json
├── vite.config.js
├── README.md
│
├── src/
│   ├── index.html              # Entry point
│   ├── main.jsx                # React app mount
│   ├── App.jsx                 # Main app shell with stage management
│   │
│   ├── pipeline/
│   │   ├── tracer.js           # VTracer wrapper (Node or WASM)
│   │   ├── analyzer.js         # Claude API vision analysis
│   │   ├── merger.js           # Combine VTracer SVG + Claude semantics
│   │   ├── refiner.js          # Handle user refinement requests
│   │   └── exporter.js         # Export as React component file
│   │
│   ├── components/
│   │   ├── ImageUploader.jsx   # Drop zone + file picker
│   │   ├── SettingsPanel.jsx   # VTracer parameters (colors, detail, speckle, etc.)
│   │   ├── PreviewPanel.jsx    # Side-by-side original vs SVG
│   │   ├── OverlayView.jsx     # Toggle overlay of SVG on original photo
│   │   ├── PartsList.jsx       # List of identified parts with names
│   │   ├── RefinePanel.jsx     # Click-to-fix interface
│   │   └── ExportPanel.jsx     # Export options and preview of React code
│   │
│   ├── utils/
│   │   ├── svgParser.js        # Parse SVG string into DOM, extract paths with bounding boxes
│   │   ├── bboxMatcher.js      # Match Claude's identified regions to SVG paths
│   │   ├── svgOptimizer.js     # Remove redundant paths, merge similar colors
│   │   └── componentTemplate.js # React component string template
│   │
│   └── styles/
│       └── app.css             # Dark theme matching Scott's existing tools
│
├── server/                     # Optional: if running VTracer server-side
│   ├── server.js               # Express server for Node.js VTracer binding
│   └── routes/
│       ├── trace.js            # POST /api/trace — accepts image, returns SVG
│       └── analyze.js          # POST /api/analyze — proxies to Claude API
│
└── output/                     # Generated components land here
    └── .gitkeep
```

---

## 5. Claude API Prompts

### 5.1 Part Identification Prompt (Pass 1 — Automatic Analysis)

Send as a multi-modal message with both the original photo and the VTracer SVG rendered as an image.

```
System: You are an industrial equipment SVG component engineer. You analyze
photographs of industrial instruments and equipment to identify their parts
for creating interactive SVG components.

User: [image: original photo]

I have a photograph of industrial equipment and I need to create an
interactive SVG component from it.

Analyze this image and identify every distinct functional part. For each
part, provide:

1. "name" — descriptive identifier (e.g., "terminal_screw_positive",
   "lcd_display", "conduit_hub_left", "ground_symbol")
2. "type" — category: "structural", "terminal", "display", "fastener",
   "label", "connector", "indicator"
3. "bbox" — approximate bounding box as percentage of image dimensions:
   {"x": 0-100, "y": 0-100, "w": 0-100, "h": 0-100}
4. "description" — what it looks like and what it does
5. "interactive" — boolean, whether a user might need to click/drag
   to/from this element
6. "dynamic" — boolean, whether this element changes based on a prop
   (e.g., LCD reading changes, liquid level changes)
7. "detail_quality" — "high", "medium", "low" — how well a simple
   auto-tracer would capture this element (screws = low, large colored
   regions = high)

Respond with ONLY a JSON array. No markdown, no explanation.
```

### 5.2 Detail Replacement Prompt (Pass 1 — Auto-improve)

For each part identified as `detail_quality: "low"`, send a follow-up:

```
User: [image: original photo, cropped to part's bounding box]

This is a close-up of a "{part.name}" ({part.description}) from an
industrial instrument. An auto-tracer produced a blobby, low-detail
version of this element.

Write clean SVG code for JUST this element. Requirements:
- Use proper geometric shapes (circles for screws, rects for terminals)
- Use realistic colors sampled from the photo
- Include appropriate detail (cross-hatch on screws, slot lines, text labels)
- Output should be a single <g> element with id="{part.name}"
- Coordinate space: viewBox should match the bounding box dimensions
- Keep it compact — under 20 SVG elements for this part

Respond with ONLY the SVG <g> element. No markdown fences, no explanation.
```

### 5.3 User Refinement Prompt (Pass 2 — Interactive)

```
User: [image: original photo]
[image: current SVG state, rendered as image]

The user clicked on a region at approximately ({click_x}%, {click_y}%)
of the SVG and said: "{user_feedback}"

The part in that region is currently: {current_svg_snippet}

Regenerate the SVG for this specific part, addressing the user's feedback.
Keep the same coordinate space and group id. Respond with ONLY the
replacement <g> element.
```

---

## 6. Merge Algorithm — `merger.js`

```javascript
/**
 * Merge VTracer SVG paths with Claude's semantic analysis.
 *
 * Algorithm:
 * 1. Parse VTracer SVG into a list of {path, fill, bbox} objects
 * 2. For each part Claude identified:
 *    a. Find all VTracer paths whose bbox overlaps the part's bbox
 *       (using IoU > 0.3 threshold or containment)
 *    b. If part.detail_quality === "low" AND Claude provided replacement SVG:
 *       - Remove the matched VTracer paths
 *       - Insert Claude's replacement <g> at the correct position
 *    c. If part.detail_quality === "medium" or "high":
 *       - Keep VTracer paths but wrap them in a named <g id="{part.name}">
 *       - Add class="{part.type}" for CSS styling hooks
 *       - If part.interactive, add data-interactive="true"
 *       - If part.dynamic, add data-dynamic="true"
 * 3. Any unmatched VTracer paths go into <g id="background">
 * 4. Optimize: merge adjacent paths with identical fills,
 *    remove paths smaller than 0.5% of total area (speckles)
 *
 * Output: Single SVG string with all paths in named groups
 */

function mergeSVGs(vtracerSvg, claudeManifest, claudeReplacements) {
  const vtracerPaths = parseSvgPaths(vtracerSvg);
  const groups = {};
  const used = new Set();

  for (const part of claudeManifest) {
    const partBbox = percentToAbsolute(part.bbox, vtracerSvg.viewBox);
    const matched = vtracerPaths.filter((p, i) => {
      if (used.has(i)) return false;
      return bboxOverlap(p.bbox, partBbox) > 0.3;
    });

    if (part.detail_quality === 'low' && claudeReplacements[part.name]) {
      // Replace with Claude's clean version
      matched.forEach((_, i) => used.add(i));
      groups[part.name] = {
        svg: claudeReplacements[part.name],
        type: part.type,
        interactive: part.interactive,
        dynamic: part.dynamic,
      };
    } else {
      // Keep VTracer paths, wrap in named group
      matched.forEach((_, i) => used.add(i));
      groups[part.name] = {
        svg: wrapInGroup(matched.map(m => m.pathElement), part.name, part.type),
        type: part.type,
        interactive: part.interactive,
        dynamic: part.dynamic,
      };
    }
  }

  // Remaining unmatched paths
  const remaining = vtracerPaths.filter((_, i) => !used.has(i));
  groups['background'] = {
    svg: wrapInGroup(remaining.map(r => r.pathElement), 'background', 'structural'),
    type: 'structural',
    interactive: false,
    dynamic: false,
  };

  return assembleSvg(groups, vtracerSvg.viewBox);
}
```

---

## 7. Component Export Template — `componentTemplate.js`

The exporter generates a file like this:

```javascript
function generateComponentCode(svgContent, manifest, componentName, fileName) {
  const props = [];
  const dynamicParts = manifest.filter(p => p.dynamic);
  const interactiveParts = manifest.filter(p => p.interactive);

  // Build props list
  props.push('x = 0', 'y = 0', 'scale = 1');
  dynamicParts.forEach(p => {
    props.push(`${p.name}_value = ""`);
  });
  if (interactiveParts.length) {
    props.push('onPartClick = () => {}');
  }

  return `
import React from "react";

export function ${componentName}({
  ${props.join(',\n  ')},
}) {
  return (
    <g transform={\`translate(\${x}, \${y}) scale(\${scale})\`}>
      ${svgContent}
    </g>
  );
}
`.trim();
}
```

---

## 8. VTracer Recommended Settings by Image Type

Store these as presets in `SettingsPanel.jsx`:

```javascript
const PRESETS = {
  photograph: {
    label: 'Equipment Photo',
    description: 'High-res photo of real equipment',
    colorMode: 'color',
    hierarchical: 'stacked',
    filterSpeckle: 4,
    colorPrecision: 8,
    layerDifference: 16,
    cornerThreshold: 60,
    lengthThreshold: 4.0,
    maxIterations: 10,
    spliceThreshold: 45,
    pathPrecision: 3,
  },
  diagram: {
    label: 'Technical Diagram',
    description: 'Clean illustration or P&ID symbol',
    colorMode: 'color',
    hierarchical: 'stacked',
    filterSpeckle: 2,
    colorPrecision: 4,
    layerDifference: 24,
    cornerThreshold: 90,
    lengthThreshold: 3.0,
    maxIterations: 5,
    spliceThreshold: 60,
    pathPrecision: 2,
  },
  highContrast: {
    label: 'High Contrast / Icon',
    description: 'Simple shapes, few colors, crisp edges',
    colorMode: 'color',
    hierarchical: 'stacked',
    filterSpeckle: 8,
    colorPrecision: 3,
    layerDifference: 32,
    cornerThreshold: 120,
    lengthThreshold: 5.0,
    maxIterations: 4,
    spliceThreshold: 90,
    pathPrecision: 2,
  },
};
```

---

## 9. UI Flow (Screens)

### Screen 1: Upload
- Drag/drop or file picker
- Preset selector (Equipment Photo / Technical Diagram / High Contrast)
- "Process Image" button

### Screen 2: Trace + Analyze
- Left panel: Original image
- Right panel: VTracer SVG output
- Bottom: "Analyzing parts..." progress indicator
- Auto-triggers Claude API analysis after VTracer completes
- Shows identified parts list as they come in

### Screen 3: Review + Refine
- Center: SVG overlaid on original photo (toggle opacity slider)
- Right sidebar: Parts list with checkmarks (✅ good, ⚠️ needs work)
- Parts flagged as detail_quality "low" are auto-replaced; show before/after
- Click any part in the SVG → highlight it → show text input for refinement
- "Re-analyze this part" button sends refinement prompt to Claude API
- "Accept all" when satisfied

### Screen 4: Export
- Preview of generated React component code
- Component name input (default: derived from filename)
- Prop configuration (which dynamic parts to expose as props)
- "Download .jsx" button
- "Copy to clipboard" button
- "Save to output/" button

---

## 10. Key Design Decisions

### Why VTracer before Claude, not Claude alone?
Claude is bad at accurate proportions and curves when drawing from scratch. VTracer nails those. Claude is good at understanding what things are and writing clean geometry for small, well-defined elements. Using both plays to each engine's strengths.

### Why not just improve the existing marching-squares converter?
The fundamental algorithm is wrong for this use case. Marching squares produces straight-line segments between grid cell edge midpoints. VTracer fits actual Bézier splines using a O(n) algorithm with proper corner detection. The quality difference is not tunable — it's architectural.

### Why client-side + API, not fully server-side?
Keeps deployment simple (static site + API key), matches Scott's existing hosting pattern (GitHub Pages), and the WASM version of VTracer runs well in-browser. The only server dependency is the Claude API call, which can be a direct fetch from the client.

### What about API costs?
Each image analysis is roughly:
- Part identification: ~1000 input tokens (image) + ~500 output tokens = ~$0.005
- Detail replacement (per part): ~800 input + ~300 output = ~$0.003 each
- Refinement round: ~1000 input + ~300 output = ~$0.004
- Typical full component: 1 analysis + 3-5 replacements + 2-3 refinements = ~$0.03-0.05 total

---

## 11. Testing Checklist

After building, verify with these test images (Scott has all of these):

- [ ] Rosemount 3051 pressure transmitter (terminal head view)
- [ ] Rosemount 3051 full body with process connection
- [ ] Vertical process vessel / tank with sight glass
- [ ] Fluke multimeter
- [ ] Siemens S7-300 PLC rack with power supply
- [ ] DIN-rail terminal blocks
- [ ] Control valve with positioner
- [ ] Simple P&ID symbol (should trace clean without Claude)

For each test:
1. VTracer output is visually recognizable
2. Claude identifies at least 80% of functional parts
3. Auto-replaced screws/fasteners look cleaner than VTracer originals
4. Exported React component renders without errors
5. Props (x, y, scale) work correctly
6. Round-trip time under 30 seconds for full pipeline

---

## 12. Scott's Existing Repos and Conventions

This tool should follow Scott's established patterns:

- **GitHub:** github.com/Sco314/
- **Console logging:** ✅/❌ prefixes for success/failure
- **Indentation:** 2-space
- **File naming:** camelCase for JS files, kebab-case for components if React
- **No unnecessary dependencies** — justify any new npm package
- **Backward compatibility** — if this tool generates components for existing projects (tank-sim, loop-trainer), exported components must use the same prop interface (`x, y, scale, ...dynamicProps`)
- **Claude Code workflow:** Commit directly to main, no pull requests

---

## 13. Getting Started (for Claude Code session)

```bash
# 1. Create project
mkdir image-to-component && cd image-to-component
npm init -y

# 2. Install core dependencies
npm install react react-dom
npm install -D vite @vitejs/plugin-react

# 3. Install VTracer (try Option A first)
npm install @neplex/vectorizer

# 4. If Option A fails (platform compatibility), use WASM:
npm install @alanscodelog/vectortracer

# 5. No other dependencies should be needed
#    - Claude API: direct fetch, no SDK required
#    - SVG parsing: DOMParser (built-in)
#    - File I/O: Node fs (built-in)

# 6. Create file structure per Section 4
# 7. Start with pipeline/tracer.js — verify VTracer works on a test image
# 8. Then pipeline/analyzer.js — verify Claude API returns part manifest
# 9. Then pipeline/merger.js — the hard part
# 10. Then the React UI
```

---

*End of handoff document. This spec should give Claude Code everything it needs to build the first working version without requiring additional context about the project goals, user workflow, or technical constraints.*
