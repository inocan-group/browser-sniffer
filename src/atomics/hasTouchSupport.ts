/**
 * Tries to detect whether the browser has touch support
 */
export function hasTouchSupport() {
  if ("ontouchstart" in window || window.TouchEvent) return true;

  if ((window as any).DocumentTouch && document instanceof (window as any).DocumentTouch)
    return true;

  const prefixes = ["", "-webkit-", "-moz-", "-o-", "-ms-"];
  const queries = prefixes.map((prefix) => `(${prefix}touch-enabled)`);

  return window.matchMedia(queries.join(",")).matches;
}
