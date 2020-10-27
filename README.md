# Browser Sniffer
> Detects features and identifying information about a given device

## Installation

```sh
# npm
npm i --save @inocan/browser-sniffer
# yarn
yarn add @inocan/browser-sniffer
```sh

## Usage
All exported symbols are provided with full typing so you can explore all the capabilities interactively but the most common usages are:

### Get Full Profile

By using the `getProfile()` you get all _non-transient_ detection possible while running from within the
browser:

```ts
import { getProfile } from '@inocan/browser-sniffer';
const profile = getProfile();
```

### Detect whether online

The browser does provide an api to synchronously identify whether it is online but it is notorious for giving false positives when in LiFi areas. With the `isOnline()` function you will get not only what the browser API tells you but it will attempt a quick HEAD network request to Google to validate that indeed the network is reachable. If you want to replace the Google URL with your own
you can do that too.

```ts
import { isOnline } from '@inocan/browser-sniffer';
const status = await isOnline();
```

> Note: because an actual network request is involved it is _asynchronous_ but it will respond in no more than 500ms (this can be configured too)

### Get a Browser Fingerprint

The `deviceFingerprint()` provides a hash code which is intended to provide useful identification of a particular device. To be useful, however, it must only use variables which are considered to be "static". For instance, the browser _version_ is NOT static ... over time the user will upgrade
the this. However, the browser vendor _may_ be considered static depending on the circumstances of how you're tracking "devices". A better indicator of a "device" is the operating system's name (not the version). Also the "availableWidth" of the screen can often help in making a device more specific.

This function will by default use the following variables to build the hash:

- Operating system name
- Available Resolution
- hasTouchSupport
- hasCanvasSupport

This may be enough for your purposes but in many cases, you may have contextual information that you want to add to the fingerprint to help facilitate it's uniqueness. For instance, if you know a user's ID then adding this will ensure that their device will never be mixed with another users.

```ts
import { deviceFingerprint, getBrowser } from '@inocan/browser-sniffer';
const fingerprint = deviceFingerprint(userId, getBrowser().name);
```

## Modules and Sizing

This library is exported in both ES and CJS and therefore is tree-shakable if you are using a modern build system. From an import 