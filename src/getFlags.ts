import { IBrowserFlags } from "./@types";
import { hasCanvasSupport, hasTouchSupport, getOs, getBrowser } from "./index";

export function getFlags(): IBrowserFlags {
  const browserName = getBrowser().name;
  const osName = getOs().name;

  return {
    isIOS: /iPhone|iPad|iPod/i.test(browserName),
    isAndroid: /Android/i.test(browserName),
    isIPhone: /iPhone/i.test(browserName),
    isIPad: /iPad/i.test(browserName),

    isWindows: /Windows/i.test(osName),
    isMac: /Mac/i.test(osName),
    isLinux: /Linux|Ubuntu/i.test(osName),
    isUbuntu: /Ubuntu/i.test(osName),

    isChrome: /Chrome/i.test(browserName),
    isFirefox: /Firefox/i.test(browserName),
    isSafari: /Safari/i.test(browserName),
    isMobileSafari: /Mobile\sSafari/i.test(browserName),
    isOpera: /Opera/i.test(browserName),
    isIE: /IE/i.test(browserName),

    hasCanvasSupport: hasCanvasSupport(),
    hasTouchSupport: hasTouchSupport(),
  };
}
