/**
 * Export merged SVG as a React component file.
 */

import { generateComponentCode } from '../utils/componentTemplate.js';

/**
 * Generate a complete React component from the merged SVG and manifest.
 * @param {string} mergedSvg - the final SVG string
 * @param {Array} manifest - parts manifest
 * @param {string} componentName - PascalCase component name
 * @returns {string} JSX file content
 */
export function exportComponent(mergedSvg, manifest, componentName) {
  // Convert SVG content (everything inside the <svg> tag) to JSX-compatible format
  const svgContent = extractSvgInner(mergedSvg);
  const jsxContent = svgToJsx(svgContent);
  const viewBox = extractViewBox(mergedSvg);

  return generateComponentCode(jsxContent, manifest, componentName, viewBox);
}

/**
 * Extract inner content from SVG string (everything between <svg> tags).
 */
function extractSvgInner(svgString) {
  const match = svgString.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  return match ? match[1].trim() : svgString;
}

/**
 * Extract viewBox from SVG string.
 */
function extractViewBox(svgString) {
  const match = svgString.match(/viewBox="([^"]+)"/);
  return match ? match[1] : '0 0 100 100';
}

/**
 * Convert SVG attribute names to JSX camelCase equivalents.
 */
function svgToJsx(svgContent) {
  const attrMap = {
    'clip-path': 'clipPath',
    'clip-rule': 'clipRule',
    'fill-opacity': 'fillOpacity',
    'fill-rule': 'fillRule',
    'flood-color': 'floodColor',
    'flood-opacity': 'floodOpacity',
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-style': 'fontStyle',
    'font-weight': 'fontWeight',
    'letter-spacing': 'letterSpacing',
    'lighting-color': 'lightingColor',
    'marker-end': 'markerEnd',
    'marker-mid': 'markerMid',
    'marker-start': 'markerStart',
    'paint-order': 'paintOrder',
    'pointer-events': 'pointerEvents',
    'shape-rendering': 'shapeRendering',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-opacity': 'strokeOpacity',
    'stroke-width': 'strokeWidth',
    'text-anchor': 'textAnchor',
    'text-decoration': 'textDecoration',
    'transform-origin': 'transformOrigin',
    'word-spacing': 'wordSpacing',
    'writing-mode': 'writingMode',
    'xmlns:xlink': 'xmlnsXlink',
    'xlink:href': 'xlinkHref',
    'xml:space': 'xmlSpace',
    'data-interactive': 'data-interactive',
    'data-dynamic': 'data-dynamic',
  };

  let jsx = svgContent;

  // Replace class= with className=
  jsx = jsx.replace(/\bclass="/g, 'className="');

  // Replace hyphenated attributes
  for (const [svg, react] of Object.entries(attrMap)) {
    const regex = new RegExp(`\\b${svg.replace(/[-/]/g, '\\$&')}=`, 'g');
    jsx = jsx.replace(regex, `${react}=`);
  }

  return jsx;
}
