import { getBrowser } from "./getBrowser";
import { getOs } from "./getOs";
import { getResolution } from "./getResolution";
import { hasCanvasSupport } from "./hasCanvasSupport";
import { hash } from "native-dash";

/**
 * Provides a compact hash signature of the device.
 *
 * You may optionally add additional strings if you know
 * additional things about the device but you must always
 * be in possession of this information so as to ensure
 * that the hash will remain idempotent
 */
export function deviceFingerprint(...additional: string[]) {
  const resolution = JSON.stringify(getResolution());
  const canvasSupport = hasCanvasSupport() ? "canvas" : "no-canvas";
  const os = getOs().name;
  const browser = getBrowser().name;

  return hash(`${additional.join()}${resolution}${canvasSupport}${os}${browser}`);
}
