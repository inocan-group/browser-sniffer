export function getLanguage(): "unknown" | string {
  return (
    navigator.language ||
    navigator?.languages[0] ||
    window.navigator.language ||
    (navigator as any)?.systemLanguage ||
    "unknown"
  );
}
