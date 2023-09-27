/* eslint-disable consistent-return */
const User = require("../../model/user/user");
const getMessage = require("../../Utils/message");

const deleteUser = async (req, res) => {
  try {
    const { email } = req.body;

    const userInstance = await User.findOne({ email });
    if (!userInstance) {
      return res.send(getMessage("USER_NOT_FOUND"));
    }
    await userInstance.deleteOne({ email });
    res.status(200).send(getMessage("USER_DELETED"));
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = deleteUser;
