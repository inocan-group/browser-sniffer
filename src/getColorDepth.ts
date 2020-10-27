export function getColorDepth() {
  return screen?.colorDepth || screen?.pixelDepth || window.screen.pixelDepth;
}
