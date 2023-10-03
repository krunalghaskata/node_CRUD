const User = require("../../model/user/user.js");
const getMessage = require("../../Utils/message.js");
const { setCacheData, getCacheData } = require("../../redis");
const findByIdUser = async (req, res) => {
  try {
    const id = req.params.id;
    const key = id;
    const data = await getCacheData(key);
    const userInstance = await User.findById(id);
    console.log(userInstance);
    if (!userInstance) {
      return res.status(200).send(getMessage("USER_NOT_FOUND"));
    }
    await setCacheData(key, user);
    return res.status(200).send(userInstance);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = findByIdUser;
