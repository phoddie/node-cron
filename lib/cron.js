import Job from "cron/job"
import Time from "cron/time"
import * as luxon from "luxon/luxon"
import Timer from "timer";

globalThis.setInterval ??= Timer.repeat;
globalThis.clearInterval ??= Timer.clear;
globalThis.setTimeout ??= Timer.set;
globalThis.clearTimeout ??= Timer.clear;

luxon.DateTime.prototype.getWeekDay = function () {
	return this.weekday === 7 ? 0 : this.weekday;
};

class Cron {
	static spwan = function() {
		throw new Error("unimplemented");
	};
	static CronTime = Time(luxon);
	static CronJob = Job(this.CronTime, this.spawn);
	static job = (
		cronTime,
		onTick,
		onComplete,
		startNow,
		timeZone,
		context,
		runOnInit,
		utcOffset,
		unrefTimeout
	) =>
		new CronJob(
			cronTime,
			onTick,
			onComplete,
			startNow,
			timeZone,
			context,
			runOnInit,
			utcOffset,
			unrefTimeout
		);

	static time = (cronTime, timeZone) => new CronTime(cronTime, timeZone);
	static sendAt = cronTime => Cron.time(cronTime).sendAt();
	static timeout = cronTime => Cron.time(cronTime).getTimeout();
}

export default Cron;
