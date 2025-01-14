import DateTime from "./datetime.js";
import Duration from "./duration.js";
import Interval from "./interval.js";
import Info from "./info.js";
import Zone from "./zone.js";
import FixedOffsetZone from "./zones/fixedOffsetZone.js";
import IANAZone from "./zones/IANAZone.js";
import InvalidZone from "./zones/invalidZone.js";
import SystemZone from "./zones/systemZone.js";
import Settings from "./settings.js";

const VERSION = "3.3.0";

export {
  VERSION,
  DateTime,
  Duration,
  Interval,
  Info,
  Zone,
  FixedOffsetZone,
  IANAZone,
  InvalidZone,
  SystemZone,
  Settings,
};

globalThis.Intl ??= class {
	static DateTimeFormat = class {
		resolvedOptions() {
			return {
				locale: "a locale!!"
			};
		}
	}
};
