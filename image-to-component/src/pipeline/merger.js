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
      // Replace with Claude's clean version
      groups[part.name] = {
        svg: claudeReplacements[part.name],
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
