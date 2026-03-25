/**
 * VTracer wrapper — abstracts server-side native binding and browser WASM fallback.
 */

export const PRESETS = {
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

/**
 * Try server-side VTracer first, fall back to in-browser WASM.
 * @param {File} imageFile - the uploaded image file
 * @param {object} options - VTracer options (from presets or custom)
 * @returns {Promise<string>} SVG string
 */
export async function traceImage(imageFile, options = PRESETS.photograph) {
  try {
    return await traceViaServer(imageFile, options);
  } catch (err) {
    console.log('❌ Server trace unavailable, falling back to WASM:', err.message);
    return await traceViaWasm(imageFile, options);
  }
}

async function traceViaServer(imageFile, options) {
  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('options', JSON.stringify(options));

  const res = await fetch('/api/trace', {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    throw new Error(`Server trace failed: ${res.status}`);
  }

  const data = await res.json();
  return data.svg;
}

async function traceViaWasm(imageFile, options) {
  // Load image into canvas to get ImageData
  const imageBitmap = await createImageBitmap(imageFile);
  const canvas = document.createElement('canvas');
  canvas.width = imageBitmap.width;
  canvas.height = imageBitmap.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imageBitmap, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Dynamic import of WASM vectorizer
  let imageDataToSvg;
  try {
    const mod = await import('vectortracer');
    imageDataToSvg = mod.imageDataToSvg || mod.default?.imageDataToSvg;
  } catch {
    // If vectortracer isn't available, use the built-in canvas fallback
    console.log('❌ WASM vectorizer not available, using canvas fallback');
    return canvasFallbackTrace(imageData, canvas.width, canvas.height, options);
  }

  if (!imageDataToSvg) {
    return canvasFallbackTrace(imageData, canvas.width, canvas.height, options);
  }

  const svg = await imageDataToSvg(imageData, {
    colorMode: options.colorMode || 'color',
    hierarchical: options.hierarchical || 'stacked',
    filterSpeckle: options.filterSpeckle ?? 4,
    colorPrecision: options.colorPrecision ?? 8,
    layerDifference: options.layerDifference ?? 16,
    cornerThreshold: options.cornerThreshold ?? 60,
    lengthThreshold: options.lengthThreshold ?? 4.0,
    maxIterations: options.maxIterations ?? 10,
    spliceThreshold: options.spliceThreshold ?? 45,
    pathPrecision: options.pathPrecision ?? 3,
  });

  console.log('✅ WASM trace complete');
  return svg;
}

/**
 * Canvas-based color quantization fallback when neither native nor WASM VTracer is available.
 * Produces a simplified SVG by extracting dominant color regions.
 */
function canvasFallbackTrace(imageData, width, height, options) {
  const { data } = imageData;
  const colorPrecision = options.colorPrecision ?? 6;
  const filterSpeckle = options.filterSpeckle ?? 4;
  const quantize = Math.max(1, Math.round(256 / Math.pow(2, colorPrecision)));

  // Quantize colors and build a color map
  const colorMap = new Map();
  const pixelColors = new Uint32Array(width * height);

  for (let i = 0; i < data.length; i += 4) {
    const r = Math.round(data[i] / quantize) * quantize;
    const g = Math.round(data[i + 1] / quantize) * quantize;
    const b = Math.round(data[i + 2] / quantize) * quantize;
    const a = data[i + 3];
    if (a < 128) continue;
    const key = (r << 16) | (g << 8) | b;
    pixelColors[i / 4] = key;
    colorMap.set(key, (colorMap.get(key) || 0) + 1);
  }

  // Sort colors by frequency, take top N
  const maxColors = Math.min(64, colorMap.size);
  const sortedColors = [...colorMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxColors);

  // Build SVG paths using simple rectangular regions for each color
  const paths = [];
  const blockSize = Math.max(2, Math.ceil(Math.sqrt(filterSpeckle)));

  for (const [colorKey] of sortedColors) {
    const r = (colorKey >> 16) & 0xff;
    const g = (colorKey >> 8) & 0xff;
    const b = colorKey & 0xff;
    const rects = [];

    // Scan in blocks
    for (let y = 0; y < height; y += blockSize) {
      let runStart = -1;
      for (let x = 0; x <= width; x += blockSize) {
        let match = false;
        if (x < width) {
          // Check if majority of block pixels match this color
          let count = 0;
          let total = 0;
          for (let dy = 0; dy < blockSize && y + dy < height; dy++) {
            for (let dx = 0; dx < blockSize && x + dx < width; dx++) {
              total++;
              if (pixelColors[(y + dy) * width + (x + dx)] === colorKey) count++;
            }
          }
          match = count > total / 2;
        }
        if (match && runStart === -1) {
          runStart = x;
        } else if (!match && runStart !== -1) {
          rects.push({ x: runStart, y, w: x - runStart, h: blockSize });
          runStart = -1;
        }
      }
    }

    if (rects.length > 0) {
      // Merge adjacent rects into path data
      const d = rects.map(r => `M${r.x},${r.y}h${r.w}v${r.h}h${-r.w}z`).join('');
      paths.push(`<path d="${d}" fill="rgb(${r},${g},${b})" />`);
    }
  }

  console.log('✅ Canvas fallback trace complete (' + paths.length + ' color layers)');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">\n${paths.join('\n')}\n</svg>`;
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
