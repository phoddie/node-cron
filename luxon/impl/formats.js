/**
 * @private
 */

const n = "numeric",
  s = "short",
  l = "long";

export const DATE_SHORT = Object.freeze({
  year: n,
  month: n,
  day: n,
});

export const DATE_MED = Object.freeze({
  year: n,
  month: s,
  day: n,
});

export const DATE_MED_WITH_WEEKDAY = Object.freeze({
  year: n,
  month: s,
  day: n,
  weekday: s,
});

export const DATE_FULL = Object.freeze({
  year: n,
  month: l,
  day: n,
});

export const DATE_HUGE = Object.freeze({
  year: n,
  month: l,
  day: n,
  weekday: l,
});

export const TIME_SIMPLE = Object.freeze({
  hour: n,
  minute: n,
});

export const TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
};

export const TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
};

export const TIME_WITH_LONG_OFFSET = Object.freeze({
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
});

export const TIME_24_SIMPLE = Object.freeze({
  hour: n,
  minute: n,
  hourCycle: "h23",
});

export const TIME_24_WITH_SECONDS = Object.freeze({
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
});

export const TIME_24_WITH_SHORT_OFFSET = Object.freeze({
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s,
});

export const TIME_24_WITH_LONG_OFFSET = Object.freeze({
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l,
});

export const DATETIME_SHORT = Object.freeze({
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
});

export const DATETIME_SHORT_WITH_SECONDS = Object.freeze({
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n,
});

export const DATETIME_MED = Object.freeze({
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
});

export const DATETIME_MED_WITH_SECONDS = Object.freeze({
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n,
});

export const DATETIME_MED_WITH_WEEKDAY = Object.freeze({
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n,
});

export const DATETIME_FULL = Object.freeze({
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s,
});

export const DATETIME_FULL_WITH_SECONDS = Object.freeze({
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s,
});

export const DATETIME_HUGE = Object.freeze({
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l,
});

export const DATETIME_HUGE_WITH_SECONDS = Object.freeze({
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l,
});
