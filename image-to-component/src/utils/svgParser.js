/**
 * Parse SVG string into structured path data with bounding boxes.
 */

/**
 * Parse an SVG string and extract all path elements with their attributes and bounding boxes.
 * @param {string} svgString - raw SVG markup
 * @returns {{ paths: Array<{element: string, d: string, fill: string, stroke: string, bbox: {x:number,y:number,w:number,h:number}}>, viewBox: {x:number,y:number,w:number,h:number}, width: number, height: number }}
 */
export function parseSvgPaths(svgString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, 'image/svg+xml');
  const svgEl = doc.querySelector('svg');

  if (!svgEl) {
    throw new Error('No <svg> element found in input');
  }

  // Extract viewBox
  const vb = svgEl.getAttribute('viewBox');
  let viewBox = { x: 0, y: 0, w: 0, h: 0 };
  if (vb) {
    const parts = vb.split(/[\s,]+/).map(Number);
    viewBox = { x: parts[0], y: parts[1], w: parts[2], h: parts[3] };
  } else {
    viewBox.w = parseFloat(svgEl.getAttribute('width')) || 100;
    viewBox.h = parseFloat(svgEl.getAttribute('height')) || 100;
  }

  // Create a hidden SVG in the DOM for getBBox calculations
  const hiddenSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  hiddenSvg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
  hiddenSvg.style.position = 'absolute';
  hiddenSvg.style.left = '-9999px';
  hiddenSvg.style.top = '-9999px';
  hiddenSvg.style.width = viewBox.w + 'px';
  hiddenSvg.style.height = viewBox.h + 'px';
  document.body.appendChild(hiddenSvg);

  const pathElements = svgEl.querySelectorAll('path, rect, circle, ellipse, polygon, polyline, line');
  const paths = [];

  for (const el of pathElements) {
    const cloned = el.cloneNode(true);
    hiddenSvg.appendChild(cloned);

    let bbox = { x: 0, y: 0, w: 0, h: 0 };
    try {
      const b = cloned.getBBox();
      bbox = { x: b.x, y: b.y, w: b.width, h: b.height };
    } catch {
      // getBBox can fail for zero-size elements
    }

    hiddenSvg.removeChild(cloned);

    paths.push({
      element: el.outerHTML,
      d: el.getAttribute('d') || '',
      fill: el.getAttribute('fill') || 'none',
      stroke: el.getAttribute('stroke') || 'none',
      bbox,
    });
  }

  document.body.removeChild(hiddenSvg);

  return { paths, viewBox, width: viewBox.w, height: viewBox.h };
}

/**
 * Get the outer SVG wrapper attributes from an SVG string.
 */
export function getSvgAttributes(svgString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, 'image/svg+xml');
  const svgEl = doc.querySelector('svg');
  if (!svgEl) return {};

  const attrs = {};
  for (const attr of svgEl.attributes) {
    attrs[attr.name] = attr.value;
  }
  return attrs;
}
