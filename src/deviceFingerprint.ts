/**
 * Provides a compact hash signature of the device. With the goal of
 * minimizing collisions but allowing fluidity in variables like Browser
 * or OS versions (as these can change and the device remains the same).
 *
 * This function should be run in the browser in order to achieve
 * enough context to build this signature in a meaningful way
 * (aka, the UA string alone is not enough).
 */
export function deviceFingerprint() {}
