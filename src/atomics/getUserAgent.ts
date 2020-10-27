import { uaParse } from "../private/ua";
/**
 * looks for the **user agent** string in the browser's
 * global objects.
 */
export function getUserAgent() {
  return navigator.userAgent || uaParse().ua;
}
