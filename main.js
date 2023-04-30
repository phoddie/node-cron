import Cron from "cron/cron" 
const CronJob = Cron.CronJob;

trace('Before job instantiation\n');
const job = new CronJob('0,10,20,30,40,50 * * * * *', function() {
	const d = new Date();
	trace('Every second:', d, "\n");
});
trace('After job instantiation\n');
job.start();
