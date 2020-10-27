import { ms } from "common-types";
export interface IBrowser {
  name: string;
  platform: string;
  version: string;
  major: number;
  minor: number;
}

export interface IOperatingSystem {
  name: string;
  version: string;
  major: number;
  minor: number;
}

export interface ITimezone {
  /**
   * fully spelled out timezone (e.g.,
   * Pacific Daylight Time)
   */
  timezone: string;
  /**
   * Abbreviated timezone name (e.g., PDT, BST, etc.)
   */
  tz: string;
  /**
   * The difference in _minutes_ between the time on the local
   * computer and Universal Coordinated Time (UTC).
   */
  offset: number;
}

export interface IOnline {
  api: boolean;
  network: boolean;
}

export interface IOnlineOptions {
  /**
   * the URL which will be requested for validating network availability;
   * by default this is `https://google.com`.
   */
  url: string;
  /** Time to wait for HEAD network request; default is **500**ms. */
  timeout: ms;
}

export interface IResolution {
  available: [width: number, height: number];
  current: [width: number, height: number];
  dpi?: [x: number, y: number];
}

export interface IBrowserFlags {
  isIOS: boolean;
  isAndroid: boolean;
  isIPhone: boolean;
  isIPad: boolean;

  isWindows: boolean;
  isMac: boolean;
  isLinux: boolean;
  isUbuntu: boolean;

  isChrome: boolean;
  isFirefox: boolean;
  isSafari: boolean;
  isMobileSafari: boolean;
  isOpera: boolean;
  isIE: boolean;

  hasCanvasSupport: boolean;
  hasTouchSupport: boolean;
}

export interface IBrowserProfile {
  userAgent: string;
  os: IOperatingSystem;
  browser: IBrowser;
  timezone: ITimezone;
  resolution: IResolution;
  colorDepth: number;
  plugins: Plugin[];

  flags: IBrowserFlags;
}
