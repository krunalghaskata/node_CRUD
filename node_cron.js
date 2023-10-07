const cron = require("node-cron");
const logger = require("./src/logger");

const scheduleOption = {
  Time: "*/10 * * * *",
};

const cronJob = cron.schedule(scheduleOption.Time, (err) => {
  try {
    if (cron) {
      return logger.info("Task executed at", new Date());
    } else {
      logger.info(message.err);
    }
  } catch (error) {
    logger.info("Task not executed at a time");
  }
});
cronJob.start();
console.log("hello", cron);

module.exports = cron;
