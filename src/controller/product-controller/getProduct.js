const models = require("../../model/product-model/product");
const productUser = models.productSchemas;

const getProduct = async (req, res) => {
  const id = req.params.id;
  const productAll = await productUser.findById(id);
  res.json(productAll);
};

module.exports = getProduct;
