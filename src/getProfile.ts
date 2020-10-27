import { getFlags } from "src";
import { IBrowserProfile } from "./@types";
import { getBrowser } from "./atomics/getBrowser";
import { getColorDepth } from "./atomics/getColorDepth";
import { getOs } from "./atomics/getOs";
import { getPlugins } from "./atomics/getPlugins";
import { getResolution } from "./atomics/getResolution";
import { getTimezone } from "./atomics/getTimezone";
import { getUserAgent } from "./atomics/getUserAgent";

/**
 * Returns comprehensive information that this library detected about the
 * browser.
 *
 * > Note: does not provide a _fingerprint_ or an _online_ status; use the
 * specific functions provided for that.
 */
export function getProfile(): IBrowserProfile {
  return {
    userAgent: getUserAgent(),
    os: getOs(),
    browser: getBrowser(),
    timezone: getTimezone(),
    resolution: getResolution(),
    colorDepth: getColorDepth(),
    plugins: getPlugins(),
    flags: getFlags(),
  };
}
