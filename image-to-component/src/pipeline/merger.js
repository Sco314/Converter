/**
 * Merge VTracer SVG paths with Claude's semantic analysis.
 *
 * Algorithm:
 * 1. Parse VTracer SVG into a list of {path, fill, bbox} objects
 * 2. For each part Claude identified:
 *    a. Find all VTracer paths whose bbox overlaps the part's bbox
 *    b. If detail_quality === "low" AND Claude provided replacement SVG:
 *       - Remove the matched VTracer paths
 *       - Insert Claude's replacement <g> at the correct position
 *    c. If detail_quality === "medium" or "high":
 *       - Keep VTracer paths but wrap them in a named <g>
 *       - Add class, data-interactive, data-dynamic attributes
 * 3. Any unmatched VTracer paths go into <g id="background">
 * 4. Optimize: remove speckle paths
 */

import { parseSvgPaths } from '../utils/svgParser.js';
import { percentToAbsolute, findMatchingPaths } from '../utils/bboxMatcher.js';
import { removeSpeckles } from '../utils/svgOptimizer.js';

/**
 * @param {string} vtracerSvg - raw SVG from VTracer
 * @param {Array} claudeManifest - parts manifest from Claude
 * @param {Object<string, string>} claudeReplacements - replacement SVG keyed by part name
 * @returns {{ svg: string, groups: Object }}
 */
export function mergeSVGs(vtracerSvg, claudeManifest, claudeReplacements = {}) {
  const { paths, viewBox } = parseSvgPaths(vtracerSvg);
  const used = new Set();
  const groups = {};

  for (const part of claudeManifest) {
    const partBbox = percentToAbsolute(part.bbox, viewBox);
    const matchedIndices = findMatchingPaths(paths, partBbox);

    // Mark matched paths as used
    const newMatches = matchedIndices.filter(i => !used.has(i));
    newMatches.forEach(i => used.add(i));

    if (part.detail_quality === 'low' && claudeReplacements[part.name]) {
      // Replace with Claude's clean version, positioned at the correct location
      const positionedSvg = positionReplacement(
        claudeReplacements[part.name], partBbox, part, viewBox
      );
      groups[part.name] = {
        svg: positionedSvg,
        type: part.type,
        interactive: part.interactive,
        dynamic: part.dynamic,
        replaced: true,
      };
    } else {
      // Keep VTracer paths, wrap in named group
      const matchedElements = newMatches.map(i => paths[i].element);
      groups[part.name] = {
        svg: wrapInGroup(matchedElements, part.name, part.type, part.interactive, part.dynamic),
        type: part.type,
        interactive: part.interactive,
        dynamic: part.dynamic,
        replaced: false,
      };
    }
  }

  // Remaining unmatched paths go to background
  const remaining = paths
    .filter((_, i) => !used.has(i))
    .map(p => p.element);

  // Remove speckles from background
  const cleanedBackground = removeSpeckles(remaining, viewBox);

  groups['background'] = {
    svg: wrapInGroup(cleanedBackground, 'background', 'structural', false, false),
    type: 'structural',
    interactive: false,
    dynamic: false,
    replaced: false,
  };

  const svg = assembleSvg(groups, viewBox);
  return { svg, groups };
}

/**
 * Replace a single part's SVG in the merged output.
 */
export function replacePart(mergedSvg, partName, newSvg) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(mergedSvg, 'image/svg+xml');
  const group = doc.getElementById(partName);

  if (group) {
    const temp = parser.parseFromString(
      `<svg xmlns="http://www.w3.org/2000/svg">${newSvg}</svg>`,
      'image/svg+xml'
    );
    const newElement = temp.querySelector('svg > *');
    if (newElement) {
      // Preserve the id
      if (!newElement.getAttribute('id')) {
        newElement.setAttribute('id', partName);
      }
      group.parentNode.replaceChild(
        doc.importNode(newElement, true),
        group
      );
    }
  }

  const serializer = new XMLSerializer();
  return serializer.serializeToString(doc.documentElement);
}

/**
 * Position a replacement SVG at the correct location and size in the main SVG.
 * Claude's replacement SVGs use their own local coordinate systems (e.g., 0-16 for a screw).
 * We need to transform them to match the part's actual position in the full SVG.
 */
function positionReplacement(replacementSvg, partBbox, part, viewBox) {
  // Measure the replacement SVG's actual bounds using a hidden DOM element
  const bounds = measureSvgBounds(replacementSvg, viewBox);

  const attrs = [
    `id="${part.name}"`,
    `class="${part.type}"`,
  ];
  if (part.interactive) attrs.push('data-interactive="true"');
  if (part.dynamic) attrs.push('data-dynamic="true"');

  if (bounds && bounds.w > 0 && bounds.h > 0) {
    // Scale from replacement's coordinate space to part's actual size
    const sx = partBbox.w / bounds.w;
    const sy = partBbox.h / bounds.h;
    // Use uniform scale to avoid distortion
    const scale = Math.min(sx, sy);
    // Center the replacement within the part bbox
    const scaledW = bounds.w * scale;
    const scaledH = bounds.h * scale;
    const offsetX = partBbox.x + (partBbox.w - scaledW) / 2;
    const offsetY = partBbox.y + (partBbox.h - scaledH) / 2;

    const transform = `translate(${offsetX}, ${offsetY}) scale(${scale}) translate(${-bounds.x}, ${-bounds.y})`;
    return `<g ${attrs.join(' ')} transform="${transform}">\n  ${replacementSvg}\n</g>`;
  }

  // Fallback: just translate to the part position without scaling
  const transform = `translate(${partBbox.x}, ${partBbox.y})`;
  return `<g ${attrs.join(' ')} transform="${transform}">\n  ${replacementSvg}\n</g>`;
}

/**
 * Measure the bounding box of an SVG snippet using a hidden DOM element.
 */
function measureSvgBounds(svgContent, viewBox) {
  try {
    const hiddenSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    hiddenSvg.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
    hiddenSvg.style.position = 'absolute';
    hiddenSvg.style.left = '-9999px';
    hiddenSvg.style.top = '-9999px';
    hiddenSvg.style.width = viewBox.w + 'px';
    hiddenSvg.style.height = viewBox.h + 'px';
    document.body.appendChild(hiddenSvg);

    // Parse the replacement SVG and append it
    const parser = new DOMParser();
    const doc = parser.parseFromString(
      `<svg xmlns="http://www.w3.org/2000/svg">${svgContent}</svg>`,
      'image/svg+xml'
    );
    const elements = doc.querySelector('svg').childNodes;
    const wrapper = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    for (const el of elements) {
      wrapper.appendChild(hiddenSvg.ownerDocument.importNode(el, true));
    }
    hiddenSvg.appendChild(wrapper);

    const bbox = wrapper.getBBox();
    const result = { x: bbox.x, y: bbox.y, w: bbox.width, h: bbox.height };

    document.body.removeChild(hiddenSvg);
    return result;
  } catch {
    return null;
  }
}

function wrapInGroup(elements, id, type, interactive, dynamic) {
  const attrs = [
    `id="${id}"`,
    `class="${type}"`,
  ];
  if (interactive) attrs.push('data-interactive="true"');
  if (dynamic) attrs.push('data-dynamic="true"');

  return `<g ${attrs.join(' ')}>\n  ${elements.join('\n  ')}\n</g>`;
}

function assembleSvg(groups, viewBox) {
  const inner = Object.values(groups)
    .map(g => g.svg)
    .join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}">\n${inner}\n</svg>`;
}
