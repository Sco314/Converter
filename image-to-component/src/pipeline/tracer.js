/**
 * VTracer wrapper — uses the official vtracer-webapp WASM module with full color support.
 *
 * The ColorImageConverter reads pixels from a canvas element and writes SVG paths
 * directly to an SVG DOM element. This is the same engine that powers vtracer.org.
 */

import { ColorImageConverter } from 'vtracer-webapp';

export const PRESETS = {
  photograph: {
    label: 'Equipment Photo',
    description: 'High-res photo of real equipment',
    mode: 'spline',
    filterSpeckle: 4,
    colorPrecision: 6,
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
    mode: 'spline',
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
    mode: 'polygon',
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

/**
 * Trace an image to SVG using vtracer's ColorImageConverter (WASM).
 * @param {File} imageFile
 * @param {object} options - from PRESETS or custom settings
 * @returns {Promise<string>} SVG string
 */
export async function traceImage(imageFile, options = PRESETS.photograph) {
  // Load image into a temporary canvas
  const imageBitmap = await createImageBitmap(imageFile);
  const canvasId = '__vtracer_canvas_' + Date.now();
  const svgId = '__vtracer_svg_' + Date.now();

  // Create temporary DOM elements (vtracer reads/writes via DOM element IDs)
  const canvas = document.createElement('canvas');
  canvas.id = canvasId;
  canvas.width = imageBitmap.width;
  canvas.height = imageBitmap.height;
  canvas.style.position = 'absolute';
  canvas.style.left = '-9999px';
  canvas.style.top = '-9999px';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  ctx.drawImage(imageBitmap, 0, 0);

  const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgEl.id = svgId;
  svgEl.style.position = 'absolute';
  svgEl.style.left = '-9999px';
  svgEl.style.top = '-9999px';
  document.body.appendChild(svgEl);

  try {
    // Build params — vtracer expects specific value transformations
    const params = JSON.stringify({
      canvas_id: canvasId,
      svg_id: svgId,
      mode: options.mode || 'spline',
      clustering_mode: 'color',
      hierarchical: 'stacked',
      filter_speckle: (options.filterSpeckle ?? 4) * (options.filterSpeckle ?? 4), // squared
      color_precision: 8 - (options.colorPrecision ?? 6), // inverted
      layer_difference: options.layerDifference ?? 16,
      corner_threshold: (options.cornerThreshold ?? 60) * Math.PI / 180, // degrees → radians
      splice_threshold: (options.spliceThreshold ?? 45) * Math.PI / 180, // degrees → radians
      length_threshold: options.lengthThreshold ?? 4.0,
      max_iterations: options.maxIterations ?? 10,
      path_precision: options.pathPrecision ?? 3,
    });

    const converter = ColorImageConverter.new_with_string(params);
    converter.init();

    // Run the converter to completion using tick()
    // tick() returns true when done
    let done = false;
    while (!done) {
      const startTick = performance.now();
      // Process in batches of ~25ms to avoid blocking the main thread too long
      while (!(done = converter.tick()) && performance.now() - startTick < 25) {
        // keep ticking
      }
      if (!done) {
        // Yield to the browser briefly
        await new Promise(r => setTimeout(r, 1));
      }
    }

    // Ensure viewBox matches image dimensions (vtracer uses pixel coordinates)
    if (!svgEl.getAttribute('viewBox')) {
      svgEl.setAttribute('viewBox', `0 0 ${imageBitmap.width} ${imageBitmap.height}`);
    }
    svgEl.setAttribute('width', String(imageBitmap.width));
    svgEl.setAttribute('height', String(imageBitmap.height));

    // Extract the SVG content
    const svgString = new XMLSerializer().serializeToString(svgEl);
    converter.free();

    console.log('✅ VTracer color trace complete');
    return svgString;
  } finally {
    // Clean up temporary DOM elements
    document.body.removeChild(canvas);
    document.body.removeChild(svgEl);
  }
}

/**
 * Convert a File to a base64 data URL.
 */
export async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Convert a File to raw base64 (without the data URL prefix).
 */
export async function fileToRawBase64(file) {
  const dataUrl = await fileToBase64(file);
  return dataUrl.split(',')[1];
}
