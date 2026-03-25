/**
 * Bounding box matching utilities for merging VTracer paths with Claude's semantic analysis.
 */

/**
 * Convert percentage-based bounding box to absolute SVG coordinates.
 * @param {{ x: number, y: number, w: number, h: number }} percentBbox - percentages (0-100)
 * @param {{ x: number, y: number, w: number, h: number }} viewBox - SVG viewBox
 * @returns {{ x: number, y: number, w: number, h: number }}
 */
export function percentToAbsolute(percentBbox, viewBox) {
  return {
    x: viewBox.x + (percentBbox.x / 100) * viewBox.w,
    y: viewBox.y + (percentBbox.y / 100) * viewBox.h,
    w: (percentBbox.w / 100) * viewBox.w,
    h: (percentBbox.h / 100) * viewBox.h,
  };
}

/**
 * Calculate Intersection over Union (IoU) between two bounding boxes.
 * @param {{ x: number, y: number, w: number, h: number }} a
 * @param {{ x: number, y: number, w: number, h: number }} b
 * @returns {number} IoU value between 0 and 1
 */
export function bboxOverlap(a, b) {
  const ax2 = a.x + a.w;
  const ay2 = a.y + a.h;
  const bx2 = b.x + b.w;
  const by2 = b.y + b.h;

  const ix1 = Math.max(a.x, b.x);
  const iy1 = Math.max(a.y, b.y);
  const ix2 = Math.min(ax2, bx2);
  const iy2 = Math.min(ay2, by2);

  if (ix2 <= ix1 || iy2 <= iy1) return 0;

  const intersection = (ix2 - ix1) * (iy2 - iy1);
  const areaA = a.w * a.h;
  const areaB = b.w * b.h;
  const union = areaA + areaB - intersection;

  if (union === 0) return 0;
  return intersection / union;
}

/**
 * Check if bbox `a` is mostly contained within bbox `b`.
 * Returns the fraction of `a` that overlaps with `b`.
 * @param {{ x: number, y: number, w: number, h: number }} a - path bbox
 * @param {{ x: number, y: number, w: number, h: number }} b - part bbox
 * @returns {number} containment ratio (0-1)
 */
export function containment(a, b) {
  const ix1 = Math.max(a.x, b.x);
  const iy1 = Math.max(a.y, b.y);
  const ix2 = Math.min(a.x + a.w, b.x + b.w);
  const iy2 = Math.min(a.y + a.h, b.y + b.h);

  if (ix2 <= ix1 || iy2 <= iy1) return 0;

  const intersection = (ix2 - ix1) * (iy2 - iy1);
  const areaA = a.w * a.h;

  if (areaA === 0) return 0;
  return intersection / areaA;
}

/**
 * Find all paths whose bounding boxes overlap significantly with a part's bounding box.
 * Uses both IoU and containment checks.
 * @param {Array} paths - parsed SVG paths with bbox
 * @param {{ x: number, y: number, w: number, h: number }} partBbox - absolute coordinates
 * @param {number} iouThreshold - minimum IoU for a match
 * @param {number} containThreshold - minimum containment ratio for a match
 * @returns {number[]} indices of matching paths
 */
export function findMatchingPaths(paths, partBbox, iouThreshold = 0.3, containThreshold = 0.6) {
  const indices = [];
  for (let i = 0; i < paths.length; i++) {
    const iou = bboxOverlap(paths[i].bbox, partBbox);
    const cont = containment(paths[i].bbox, partBbox);
    if (iou >= iouThreshold || cont >= containThreshold) {
      indices.push(i);
    }
  }
  return indices;
}
