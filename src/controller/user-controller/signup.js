const User = require("../../model/user/user.js");
const sendMail = require("../../Utils/sendMail");
const getMessage = require("../../Utils/message");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!(name && email && password)) {
      res.send(getMessage("REQUIRED_INPUT"));
    }
    const UserInstance = await User.findOne({ email });
    if (UserInstance) {
      return res.send(getMessage("USER_EXIST"));
    }
    const user = new User({
      name,
      email,
      password,
    });
    await user.save();
    await sendMail(email);  
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = signup;
