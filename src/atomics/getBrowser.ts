import { IBrowser } from "../@types";
import { uaParse } from "../private/ua";

export function getBrowser(uaString?: string): IBrowser {
  const ua = uaParse(uaString);
  const version = ua.browser.version;
  const vParts =
    version && version.includes(".") ? version.split(".").map((i) => parseInt(i)) : undefined;

  return {
    name: ua.browser.name || "unknown",
    platform: navigator.platform,
    version: ua.browser.version || "unknown",
    major: vParts ? vParts[0] : 0,
    minor: vParts ? vParts[1] : 0,
  };
}
