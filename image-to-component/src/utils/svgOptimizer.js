/**
 * SVG optimization utilities — remove speckles, merge similar paths.
 */

/**
 * Remove speckle paths (paths smaller than threshold % of total SVG area).
 * @param {string[]} pathElements - array of SVG element strings
 * @param {{ x: number, y: number, w: number, h: number }} viewBox
 * @param {number} threshold - minimum area as fraction of total (default 0.005 = 0.5%)
 * @returns {string[]} filtered path elements
 */
export function removeSpeckles(pathElements, viewBox, threshold = 0.005) {
  const totalArea = viewBox.w * viewBox.h;
  const minArea = totalArea * threshold;

  // We need to parse each element to check its bounding box
  // Since we're in the browser, use a hidden SVG
  const hiddenSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  hiddenSvg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
  hiddenSvg.style.position = 'absolute';
  hiddenSvg.style.left = '-9999px';
  hiddenSvg.style.top = '-9999px';
  hiddenSvg.style.width = viewBox.w + 'px';
  hiddenSvg.style.height = viewBox.h + 'px';
  document.body.appendChild(hiddenSvg);

  const parser = new DOMParser();
  const kept = [];

  for (const elStr of pathElements) {
    try {
      const doc = parser.parseFromString(
        `<svg xmlns="http://www.w3.org/2000/svg">${elStr}</svg>`,
        'image/svg+xml'
      );
      const el = doc.querySelector('svg > *');
      if (!el) { kept.push(elStr); continue; }

      const cloned = hiddenSvg.ownerDocument.importNode(el, true);
      hiddenSvg.appendChild(cloned);

      try {
        const bbox = cloned.getBBox();
        const area = bbox.width * bbox.height;
        if (area >= minArea) {
          kept.push(elStr);
        }
      } catch {
        kept.push(elStr); // Keep if we can't measure
      }

      hiddenSvg.removeChild(cloned);
    } catch {
      kept.push(elStr);
    }
  }

  document.body.removeChild(hiddenSvg);
  return kept;
}

/**
 * Merge paths with identical fill colors that are adjacent in the SVG.
 * Simple heuristic: combine path data of same-fill adjacent paths.
 * @param {Array<{element: string, d: string, fill: string}>} paths
 * @returns {string[]} merged element strings
 */
export function mergeAdjacentSameFill(paths) {
  if (paths.length === 0) return [];

  const merged = [];
  let current = { ...paths[0], dParts: [paths[0].d] };

  for (let i = 1; i < paths.length; i++) {
    if (paths[i].fill === current.fill && paths[i].d) {
      current.dParts.push(paths[i].d);
    } else {
      // Flush current
      if (current.dParts.length > 1) {
        merged.push(`<path d="${current.dParts.join(' ')}" fill="${current.fill}" />`);
      } else {
        merged.push(current.element);
      }
      current = { ...paths[i], dParts: [paths[i].d] };
    }
  }

  // Flush last
  if (current.dParts.length > 1) {
    merged.push(`<path d="${current.dParts.join(' ')}" fill="${current.fill}" />`);
  } else {
    merged.push(current.element);
  }

  return merged;
}
