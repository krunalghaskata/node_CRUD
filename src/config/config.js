require("dotenv").config();

const config = {
  PORT: process.env.PORT,
  DB: {
    CONNECTION_URL: process.env.DB_CONNECTION_URL,
  },
  RATE_LIMIT: {
    DEFAULT_IN_MS: Number(process.env.RATE_LIMIT_DEFAULT_WINDOW_IN_MS),
    MAX_REQUESTS: Number(process.env.RATE_LIMIT_MAX_REQUESTS_PER_WINDOW),
  },
};
module.exports = config;
