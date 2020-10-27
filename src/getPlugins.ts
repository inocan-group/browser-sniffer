/**
 * return an array of plugins (and meta) that the browser has loaded
 */
export function getPlugins() {
  let plugins: Plugin[] = [];
  for (const p of Array.from(navigator.plugins)) {
    plugins.push(p);
  }
  return plugins;
}
