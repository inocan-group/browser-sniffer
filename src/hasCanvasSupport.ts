/**
 * Indicates whether browser supports `canvas` elements
 */
export function hasCanvasSupport() {
  try {
    const elem = document.createElement("canvas");
    return !!(elem.getContext && elem.getContext("2d"));
  } catch (e) {
    return false;
  }
}
