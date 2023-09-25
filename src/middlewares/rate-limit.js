const rateLimit = require("express-rate-limit");
const config = require("../config/config");

const rateLimiterConfig = {
  windowMs: config.RATE_LIMIT.DEFAULT_IN_MS,
  max: config.RATE_LIMIT.MAX_REQUESTS,
  standardHeaders: true,
  legacyHeaders: false,
};

const rateLimiters = rateLimit(rateLimiterConfig);
module.exports = rateLimiters;
