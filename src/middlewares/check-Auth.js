const CONFIG = require("../config/config.js");
const { verifyToken } = require("../middlewares/check-Auth.js");
const User = require("../model/user/user");
const getMessage = require("../Utils/message.js");

const checkAuth = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(403).send(getMessage("REQUIRED_TOKEN"));
    }
    token = token.slice(7);
    const decoded = await verifyToken(token, CONFIG.TOKEN.SIGN);
    const { id } = decoded;
    const user = await User.findById(id);
    if (!user) {
      return res.send("REQUIRE_LOGIN");
    }
  } catch (error) {
    if (error.message === "jwt expired") {
      return res.status(500).send(getMessage("TOKEN_EXPIRED"));
    }
    res.status(500).send(error);
  }
  return next();
};

module.exports = checkAuth;
