const productController = require("./product-controller/index");
const userController = require("./user-controller/index");
const allController = {
  ...productController,
  ...userController,
};

module.exports = allController;
