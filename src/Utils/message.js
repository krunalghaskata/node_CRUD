const message = {
  REQUIRED_INPUT: "Input is required!",
  USER_EXIST: "User already exists, please login!",
  SIGNUP: "please signup first!",
};

const getMessage = (key) => {
  if (message[key]) {
    return message[key];
  }
  return "message key not Found!!!!";
};
module.exports = getMessage;
