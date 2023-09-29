const signup = require("./signup.js");
const login = require("./login.js");
const update = require("./update.js");
const deleteUser = require("./delete.js");
const findAllUser = require("./allUser.js");
const findByIdUser = require("./IdUserGet");
module.exports = {
  signup,
  login,
  update,
  deleteUser,
  findAllUser,
  findByIdUser,
};
