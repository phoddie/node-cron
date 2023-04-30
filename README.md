# Cron for Moddable SDK
Updated April 29, 2023

This repository contains a port of the [Cron module](https://github.com/kelektiv/node-cron) for use on with Embedded JavaScript using the Moddable SDK.

Cron depends on the [Luxon module](https://github.com/moment/luxon), so this repository also includes a port of [luxon](./luxon). Luxon depends on `Intl` which is unavailable on embedded as of this writing. Fortunately, the basic features of Cron work without `Intl`.

Cron for the Moddable SDK has been tested on macOS using the simulator, ESP8266, and ESP32. However, it has not been tested thoroughly. Please report [any issues](https://github.com/phoddie/node-cron).

## Using Cron
To use the Cron module with the Moddable SDK, you need to add it to your project's manifest. An easy way to do that is by referencing its GitHub repository in your manifest.

```json
	"include": [
		{
			"git":"github.com/phoddie/node-cron.git"
		}
	]
```

Use an `import` statement to get a reference to the Cron module:

```js
import Cron from "cron/cron" 

```

From there, Cron works as usual. For example, here is the basic.js example from the Cron repository adapted for the Moddable SDK runtime:

```js
import Cron from "cron/cron" 
const CronJob = Cron.CronJob;

trace('Before job instantiation\n');
const job = new CronJob('* * * * * *', function() {
	const d = new Date();
	trace('Every second:', d, "\n");
});
trace('After job instantiation\n');
job.start();
```

## Cron port
The Moddable SDK uses standard ECMAScript module (ESM). Because Cron is implemented using CommonJS modules, it needed to be updated to use ESM. As a result, most of the cron.js module was rewritten. In addition, the cron.js module patches in the `setInterval`, `clearInterval`, `setTimeout`, and `clearTimeout` globals from the Moddable SDK `Timer` module, as Cron depends on them. The job and time modules were updated to use ESM as well.

In addition, immutable static data objects were updated to be frozen using `Object.freeze`. This allows the XS JavaScript engine's linker to store them entirely in flash memory, saving RAM.

Finally, two regular expressions were moved from module globals to local variables to work-around a limitation in executing regular expressions from immutable flash memory.

## Luxon port
The Luxon module is written using ESM, which simplified the port. As with Cron, immutable static data objects were frozen.

If the `Intl` global is not present, the Luxon port installs a stub that is sufficient for basic uses of Cron. For other uses of Luxon (string formatting, time zones) this will likely lead to failures.

## Preload
Both the Cron and Luxon modules are [preloaded](https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/xs/preload.md). This allows their code and data to reside in flash, saving RAM and speeding start-up time. Unfortunately, it was not possible to move all the data to flash in this initial port, so there are some build warnings about data that still requires some RAM. These can safely be ignored. It may be possible to eliminate these in the future. The warnings look like this:

```
### warning: luxon/datetime: default() Settings.get defaultZone() normalizeZone() SystemZone.get instance() singleton: no const
### warning: luxon/datetime: default() Settings.get defaultZone() normalizeZone() FixedOffsetZone.get utcInstance() singleton: no const
...
```
