const Redis = require("ioredis");
const CONFIG = require("./config/config");

const redisOptions = {
  host: CONFIG.REDIS.HOST,
  port: CONFIG.REDIS.PORT,
};

const redisClient = new Redis(redisOptions);

const setCacheData = async (key, value) => {
  const data = await redisClient.set(key, JSON.stringify(value));
  console.log(`CACHE WRITE FOR ${key}`);
  return data;
};

const getCacheData = async (key) => {
  const parsedData = await redisClient.get(key);
  if (parsedData) {
    console.log(`CACHE HIT FOR ${key}`);
    return JSON.parse(parsedData);
  }
  return null;
};

const purgeCacheByKey = async (key) => {
  const data = await redisClient.del(key);
  if (data) {
    console.log(`Purge All key for ${key}`);
    return data;
  }
  return null;
};

module.exports = {
  redisClient,
  setCacheData,
  getCacheData,
  purgeCacheByKey,
};
