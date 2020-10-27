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

export interface IResolution {
  available: [width: number, height: number];
  current: [width: number, height: number];
  dpi?: [x: number, y: number];
}
