const message = {
  REQUIRED_INPUT: "Input is required!",
  USER_EXIST: "User already exists, please login!",
  SIGNUP: "please signup first!",
  LOGIN_SUCCESS: "user login successfully",
  USER_UPDATED: "user update successfully",
  USER_NOT_FOUND: "user not found!!",
  USER_DELETED: "user delete successfully",
  INVALID_PASSWORD: "invalid password , please try again..",
  REQUIRED_TOKEN: "A token is required for authentication!",
  REQUIRE_LOGIN: "require login",
  TOKEN_EXPIRED:"token expired ,please login"
};

const getMessage = (key) => {
  if (message[key]) {
    return message[key];
  }
  return "message key not Found!!!!";
};
module.exports = getMessage;
