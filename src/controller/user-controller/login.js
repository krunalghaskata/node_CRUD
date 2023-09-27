const User = require("../../model/user/user.js");
const getMessage = require("../../Utils/message.js");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userInstance = await User.findOne({ email, password });
    if (!userInstance) {
      return res.send(getMessage("SIGNUP"));
    }

    res.status(200).send({
      message: getMessage("LOGIN_SUCCESS"),
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = login;
