import { UAParser } from "ua-parser-js";

const parser = new UAParser();
let _parsed: IUAParser.IResult;

/**
 * Leverages the popular uaParser library for intel on
 * the device.
 *
 * Typically you should _not_ pass in the UA string (
 * letting this library detect it) but you can if you
 * have a string you need to parse.
 *
 * Results which did _not_ pass in the UA string will have
 * the parse results cashed in memory.
 */
export function uaParse(ua?: string) {
  if (_parsed && !ua) return _parsed;
  const detectedUA = parser.getUA();
  parser.setUA(ua ? ua : detectedUA);
  const parsed = parser.getResult();
  if (!ua) _parsed = parsed;

  return parsed;
}
