import { wait } from "common-types";
import { IOnline, IOnlineOptions } from "./@types";

/**
 * Indicates whether the browser is online; it returns both the
 * `navigator.onLine()` result as well as a HEAD network request
 * to _https://google.com_.
 */
export async function isOnline(options: Partial<IOnlineOptions> = {}): Promise<IOnline> {
  const o: IOnlineOptions = { url: "https://google.com", timeout: 500, ...options };
  return new Promise((resolve) => {
    let hasCompleted = false;
    fetch(o.url, { method: "HEAD" }).then((r) => {
      if (!hasCompleted) {
        hasCompleted = true;
        resolve({
          api: navigator.onLine,
          network: r.ok,
        });
      }
    });
    wait(o.timeout).then(() => {
      if (!hasCompleted) {
        hasCompleted = true;
        resolve({
          api: navigator.onLine,
          network: false,
        });
      }
    });
  });
}
