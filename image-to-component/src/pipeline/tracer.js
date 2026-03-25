/**
 * VTracer wrapper — uses the real vtracer WASM BinaryImageConverter for each color layer.
 *
 * Color tracing works by:
 *   1. Quantizing the image into N color layers (median-cut)
 *   2. Creating a binary mask for each color
 *   3. Running vtracer's BinaryImageConverter on each mask
 *   4. Combining all traced paths with fill colors into a single SVG
 *
 * This is how vtracer's color mode actually works internally.
 */

export const PRESETS = {
  photograph: {
    label: 'Equipment Photo',
    description: 'High-res photo of real equipment',
    filterSpeckle: 4,
    colorPrecision: 6,
    layerDifference: 16,
    cornerThreshold: 60,
    lengthThreshold: 4.0,
    maxIterations: 10,
    spliceThreshold: 45,
    pathPrecision: 3,
    mode: 'spline',
  },
  diagram: {
    label: 'Technical Diagram',
    description: 'Clean illustration or P&ID symbol',
    filterSpeckle: 2,
    colorPrecision: 4,
    layerDifference: 24,
    cornerThreshold: 90,
    lengthThreshold: 3.0,
    maxIterations: 5,
    spliceThreshold: 60,
    pathPrecision: 2,
    mode: 'spline',
  },
  highContrast: {
    label: 'High Contrast / Icon',
    description: 'Simple shapes, few colors, crisp edges',
    filterSpeckle: 8,
    colorPrecision: 3,
    layerDifference: 32,
    cornerThreshold: 120,
    lengthThreshold: 5.0,
    maxIterations: 4,
    spliceThreshold: 90,
    pathPrecision: 2,
    mode: 'polygon',
  },
};

/**
 * Trace an image to SVG using vtracer's BinaryImageConverter (WASM).
 * @param {File} imageFile
 * @param {object} options
 * @returns {Promise<string>} SVG string
 */
export async function traceImage(imageFile, options = PRESETS.photograph) {
  // Load image into canvas to get pixel data
  const imageBitmap = await createImageBitmap(imageFile);
  const canvas = document.createElement('canvas');
  canvas.width = imageBitmap.width;
  canvas.height = imageBitmap.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imageBitmap, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Try to load the real vtracer WASM module
  let BinaryImageConverter;
  try {
    const mod = await import('vectortracer');
    BinaryImageConverter = mod.BinaryImageConverter || mod.default?.BinaryImageConverter;
  } catch (err) {
    console.error('Failed to load vectortracer WASM:', err);
  }

  if (!BinaryImageConverter) {
    throw new Error(
      'VTracer WASM module failed to load. The vectortracer package may not be installed correctly.'
    );
  }

  return traceColorImage(imageData, canvas.width, canvas.height, options, BinaryImageConverter);
}

/**
 * Color tracing: quantize → binary layers → vtracer each layer → combine.
 */
function traceColorImage(imageData, width, height, options, BinaryImageConverter) {
  const { data } = imageData;

  // Step 1: Quantize colors using median-cut
  const maxColors = Math.pow(2, Math.min(options.colorPrecision || 6, 8));
  const layerDiff = options.layerDifference || 16;
  const colors = medianCutQuantize(data, width, height, maxColors, layerDiff);

  console.log(`🎨 Quantized to ${colors.length} color layers`);

  // Step 2: For each color, create a binary mask and trace it
  const svgPaths = [];

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    const binaryImageData = createBinaryMask(data, width, height, color, layerDiff);

    try {
      const svgFragment = traceBinaryLayer(
        binaryImageData,
        width,
        height,
        options,
        BinaryImageConverter,
        color
      );
      if (svgFragment) {
        svgPaths.push(svgFragment);
      }
    } catch (err) {
      console.warn(`⚠️ Failed to trace layer ${i} (${rgbString(color)}):`, err.message);
    }
  }

  console.log(`✅ VTracer traced ${svgPaths.length} color layers`);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">\n${svgPaths.join('\n')}\n</svg>`;
}

/**
 * Create a binary mask ImageData for pixels matching the given color.
 */
function createBinaryMask(data, width, height, color, tolerance) {
  const mask = new ImageData(width, height);
  const maskData = mask.data;

  for (let i = 0; i < data.length; i += 4) {
    const dr = Math.abs(data[i] - color.r);
    const dg = Math.abs(data[i + 1] - color.g);
    const db = Math.abs(data[i + 2] - color.b);
    const a = data[i + 3];

    if (a > 128 && dr <= tolerance && dg <= tolerance && db <= tolerance) {
      // White = foreground in the mask
      maskData[i] = 255;
      maskData[i + 1] = 255;
      maskData[i + 2] = 255;
      maskData[i + 3] = 255;
    } else {
      // Black = background
      maskData[i] = 0;
      maskData[i + 1] = 0;
      maskData[i + 2] = 0;
      maskData[i + 3] = 255;
    }
  }

  return mask;
}

/**
 * Run vtracer's BinaryImageConverter on a single binary mask layer.
 * Returns SVG path elements with the fill color applied.
 */
function traceBinaryLayer(binaryImageData, width, height, options, BinaryImageConverter, color) {
  const converterParams = {
    mode: options.mode || 'spline',
    cornerThreshold: options.cornerThreshold ?? 60,
    lengthThreshold: options.lengthThreshold ?? 4.0,
    maxIterations: options.maxIterations ?? 10,
    spliceThreshold: options.spliceThreshold ?? 45,
    filterSpeckle: options.filterSpeckle ?? 4,
    pathPrecision: options.pathPrecision ?? 3,
  };

  const converterOptions = {
    invert: false,
    pathFill: rgbString(color),
  };

  const converter = new BinaryImageConverter(binaryImageData, converterParams, converterOptions);
  converter.init();

  // Run the converter to completion
  let maxTicks = 10000;
  while (!converter.tick() && maxTicks-- > 0) {
    // tick() returns true when done
  }

  const result = converter.getResult();
  converter.free();

  if (!result || result.trim().length === 0) {
    return null;
  }

  // The result is an SVG string — extract just the path/group elements
  // vtracer returns a full <svg> element, we need just the inner paths
  const innerContent = extractSvgContent(result, color);
  return innerContent;
}

/**
 * Extract path elements from vtracer SVG output and apply fill color.
 */
function extractSvgContent(svgString, color) {
  const fill = rgbString(color);

  // Parse the SVG to extract paths
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, 'image/svg+xml');
  const svg = doc.querySelector('svg');

  if (!svg) {
    // If it's not wrapped in <svg>, it might be raw path data
    return `<g fill="${fill}">${svgString}</g>`;
  }

  // Get all path/polygon/polyline elements
  const elements = svg.querySelectorAll('path, polygon, polyline, rect, circle, ellipse');
  if (elements.length === 0) return null;

  const paths = [];
  for (const el of elements) {
    // Override fill color to match our quantized color
    el.setAttribute('fill', fill);
    el.removeAttribute('stroke');
    paths.push(el.outerHTML);
  }

  return `<g fill="${fill}">\n${paths.join('\n')}\n</g>`;
}

// ─── Color Quantization (Median Cut) ──────────────────────────────────────────

function medianCutQuantize(data, width, height, maxColors, layerDiff) {
  // Collect unique pixel colors (sampled for performance)
  const sampleStep = Math.max(1, Math.floor((width * height) / 50000));
  const pixels = [];

  for (let i = 0; i < data.length; i += 4 * sampleStep) {
    if (data[i + 3] > 128) {
      pixels.push({ r: data[i], g: data[i + 1], b: data[i + 2] });
    }
  }

  if (pixels.length === 0) return [];

  // Median cut
  let buckets = [pixels];

  while (buckets.length < maxColors) {
    // Find the bucket with the widest color range
    let widestIdx = 0;
    let widestRange = -1;

    for (let i = 0; i < buckets.length; i++) {
      const range = getColorRange(buckets[i]);
      if (range.maxRange > widestRange && buckets[i].length > 1) {
        widestRange = range.maxRange;
        widestIdx = i;
      }
    }

    if (widestRange <= layerDiff) break; // All remaining buckets are within tolerance

    const bucket = buckets[widestIdx];
    const range = getColorRange(bucket);

    // Sort by the widest channel and split at median
    bucket.sort((a, b) => a[range.channel] - b[range.channel]);
    const mid = Math.floor(bucket.length / 2);

    buckets.splice(widestIdx, 1, bucket.slice(0, mid), bucket.slice(mid));
  }

  // Average each bucket to get representative colors
  return buckets
    .filter(b => b.length > 0)
    .map(bucket => {
      const sum = bucket.reduce(
        (acc, p) => ({ r: acc.r + p.r, g: acc.g + p.g, b: acc.b + p.b }),
        { r: 0, g: 0, b: 0 }
      );
      return {
        r: Math.round(sum.r / bucket.length),
        g: Math.round(sum.g / bucket.length),
        b: Math.round(sum.b / bucket.length),
        count: bucket.length,
      };
    })
    .sort((a, b) => b.count - a.count); // Most frequent first (background first)
}

function getColorRange(pixels) {
  let rMin = 255, rMax = 0, gMin = 255, gMax = 0, bMin = 255, bMax = 0;
  for (const p of pixels) {
    if (p.r < rMin) rMin = p.r;
    if (p.r > rMax) rMax = p.r;
    if (p.g < gMin) gMin = p.g;
    if (p.g > gMax) gMax = p.g;
    if (p.b < bMin) bMin = p.b;
    if (p.b > bMax) bMax = p.b;
  }
  const rRange = rMax - rMin;
  const gRange = gMax - gMin;
  const bRange = bMax - bMin;
  const maxRange = Math.max(rRange, gRange, bRange);
  const channel = maxRange === rRange ? 'r' : maxRange === gRange ? 'g' : 'b';
  return { maxRange, channel };
}

function rgbString(color) {
  return `rgb(${color.r},${color.g},${color.b})`;
}

// ─── Utilities ───────────────────────────────────────────────────────────────

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
