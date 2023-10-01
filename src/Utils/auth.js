const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CONFIG = require("../config/config");

const generateHash = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

const compareHash = async (password, hash) => {
  const comparePassword = await bcrypt.compare(password, hash);
  return comparePassword;
};

const generateToken = async (payload) => {
  const token = await jwt.sign(payload, CONFIG.TOKEN.SIGN, {
    expiresIn: CONFIG.TOKEN.LIFE_TIME,
  });
  return token;
};

const verifyToken = async (token) => {
  const decoded = jwt.verify(token, CONFIG.TOKEN.SIGN);
  return decoded;
};

module.exports = {
  generateHash,
  compareHash,
  generateToken,
  verifyToken,
};
