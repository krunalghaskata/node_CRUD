const models = require("../../model/product-model/product");
const productUser = models.productSchemas;

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const productReplace = await productUser.findOneAndDelete({ _id: id });
    res.status(201).json(productReplace);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = deleteProduct;
