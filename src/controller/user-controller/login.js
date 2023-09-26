const User = require("../../model/user/user.js");
const getMessage = require("../../Utils/message.js");

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const UserInstance = await User.findOne({ email });
    if (!UserInstance) {
      return req.send(getMessage(SIGNUP));
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = login;
