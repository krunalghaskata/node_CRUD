const models = require("../../model/product-model/product");
const productUser = models.productSchemas;

const getAllProduct = async (req, res) => {
  const productAll = await productUser.find();
  res.json(productAll);
};

module.exports = getAllProduct;
