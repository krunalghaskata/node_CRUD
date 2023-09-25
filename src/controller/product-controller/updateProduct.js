const models = require("../../model/product-model/product");
const productUser = models.productSchemas;

const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const productReplace = await productUser.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(201).json(productReplace);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = updateProduct;
