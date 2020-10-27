import { IResolution } from "./@types";

export function getResolution(): IResolution {
  return {
    available: [screen.availWidth, screen.availHeight],
    current: [
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    ],
    dpi:
      (screen as any).deviceXDPI && (screen as any).deviceYDPI
        ? [(screen as any).deviceXDPI, (screen as any).deviceYDPI]
        : undefined,
  };
}
screen.pixelDepth;
