/**
 * Handle user refinement requests — click a part, describe the fix, regenerate.
 */

import { refinePart as callRefine } from './analyzer.js';
import { replacePart } from './merger.js';

/**
 * Find which part was clicked based on coordinates and manifest.
 * @param {Array} manifest - parts manifest
 * @param {number} clickXPercent - click X as percentage (0-100)
 * @param {number} clickYPercent - click Y as percentage (0-100)
 * @returns {object|null} the closest matching part
 */
export function findClickedPart(manifest, clickXPercent, clickYPercent) {
  let bestPart = null;
  let bestDist = Infinity;

  for (const part of manifest) {
    const cx = part.bbox.x + part.bbox.w / 2;
    const cy = part.bbox.y + part.bbox.h / 2;

    // Check if click is inside the bbox
    if (
      clickXPercent >= part.bbox.x &&
      clickXPercent <= part.bbox.x + part.bbox.w &&
      clickYPercent >= part.bbox.y &&
      clickYPercent <= part.bbox.y + part.bbox.h
    ) {
      const dist = Math.hypot(clickXPercent - cx, clickYPercent - cy);
      if (dist < bestDist) {
        bestDist = dist;
        bestPart = part;
      }
    }
  }

  // If no direct hit, find closest part center
  if (!bestPart) {
    for (const part of manifest) {
      const cx = part.bbox.x + part.bbox.w / 2;
      const cy = part.bbox.y + part.bbox.h / 2;
      const dist = Math.hypot(clickXPercent - cx, clickYPercent - cy);
      if (dist < bestDist) {
        bestDist = dist;
        bestPart = part;
      }
    }
  }

  return bestPart;
}

/**
 * Get the current SVG snippet for a part from the merged SVG.
 */
export function getPartSvg(mergedSvg, partName) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(mergedSvg, 'image/svg+xml');
  const group = doc.getElementById(partName);
  if (!group) return '';
  return group.outerHTML;
}

/**
 * Refine a part: call Claude API and splice result into merged SVG.
 * @param {string} imageBase64
 * @param {string} mediaType
 * @param {string} mergedSvg - current merged SVG
 * @param {object} part - part from manifest
 * @param {string} userFeedback
 * @param {string|null} apiKey
 * @returns {Promise<string>} updated merged SVG
 */
export async function refineAndReplace(imageBase64, mediaType, mergedSvg, part, userFeedback, apiKey = null, idToken = null) {
  const currentSnippet = getPartSvg(mergedSvg, part.name);

  const clickX = part.bbox.x + part.bbox.w / 2;
  const clickY = part.bbox.y + part.bbox.h / 2;

  const newSvg = await callRefine(
    imageBase64,
    mediaType,
    currentSnippet,
    clickX,
    clickY,
    userFeedback,
    apiKey,
    idToken
  );

  return replacePart(mergedSvg, part.name, newSvg);
}
