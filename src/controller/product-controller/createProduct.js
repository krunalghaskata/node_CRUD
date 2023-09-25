const models = require("../../model/product-model/product");
const productUser = models.productSchemas;

const createProduct = async (req, res) => {
  try {
    const productCreate = new productUser(req.body);
    await productCreate.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = createProduct;
