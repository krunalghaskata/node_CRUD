const User = require("../../model/user/user.js");

const findAllUser = async (req, res) => {
  try {
    const userInstance = await User.find();
    return res.status(200).send(userInstance);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = findAllUser;
