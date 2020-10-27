import { IOperatingSystem } from "./@types";
import { uaParse } from "./private/ua";

export function getOs(uaString?: string): IOperatingSystem {
  const ua = uaParse(uaString);
  const version = ua.os.version;
  const vParts =
    version && version.includes(".") ? version.split(".").map((i) => parseInt(i)) : undefined;

  return {
    name: ua.os.name || "unknown",
    version: ua.os.version || "unknown",
    major: vParts ? vParts[0] : 0,
    minor: vParts ? vParts[1] : 0,
  };
}
