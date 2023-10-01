const User = require("../../model/user/user.js");
const getMessage = require("../../Utils/message.js");
const { generateHash } = require("../../Utils/auth");
const jwt = require("jsonwebtoken");

const update = async (req, res) => {
  try {
    const { email } = req.body;
    let { password } = req.body;

    const userInstance = await User.findOne({ email });
    if (!userInstance) {
      return res.send(getMessage("USER_NOT_FOUND"));
    }
    if (password) {
      password = await generateHash(password);
    }
    await userInstance.updateOne({ ...req.body, password });

    res.status(200).send(getMessage("USER_UPDATED"));
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = update;
