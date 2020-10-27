import { IOnline } from "./@types";

/**
 * Indicates whether the browser is online; it returns both the
 * `navigator.onLine()` result as well as a HEAD network request
 * to _https://google.com_.
 */
export async function isOnline(): Promise<IOnline> {
  return {
    api: navigator.onLine,
    network: (await fetch("https://google.com", { method: "HEAD" })).ok,
  };
}
