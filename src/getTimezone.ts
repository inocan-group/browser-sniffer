import { ITimezone } from "./@types";

export function getTimezone(): ITimezone {
  const d = new Date();
  const timezone = d.toString().replace(/^.*\((.*)\)/, "$1");
  const tz = timezone
    .split(/\s+/)
    .map((i) => i.slice(0, 1).toUpperCase())
    .join();

  return {
    offset: d.getTimezoneOffset(),
    timezone,
    tz,
  };
}
