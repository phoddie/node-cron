// adapted from examples/basic.js

import Cron from "cron/cron" 
const CronJob = Cron.CronJob;

trace('Before job instantiation\n');
const job = new CronJob('* * * * * *', function() {
	const d = new Date();
	trace('Every second:', d, "\n");
});
trace('After job instantiation\n');
job.start();
