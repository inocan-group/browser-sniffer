import { getFlags } from "src";
import { IBrowserProfile } from "./@types";
import { getBrowser } from "./getBrowser";
import { getColorDepth } from "./getColorDepth";
import { getOs } from "./getOs";
import { getPlugins } from "./getPlugins";
import { getResolution } from "./getResolution";
import { getTimezone } from "./getTimezone";
import { getUserAgent } from "./getUserAgent";

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
