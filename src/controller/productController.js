const fs = require("fs");
const models = require("../model/product");
const productUser = models.productSchemas;

// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const product = data.products;

const getAllProduct = async (req, res) => {
  const productAll = await productUser.find();
  res.json(productAll);
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  const productAll = await productUser.findById(id);
  res.json(productAll);
};

///  CREATE
const createProduct = async (req, res) => {
  try {
    const productCreate = new productUser(req.body);
    await productCreate.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).send(error);
  }

  // try {
  //   const productCreate = new productUser();
  //   productCreate.title = "Redmi 15";
  //   productCreate.price = 997474;
  //   productCreate.discountPercentage = 24.5;
  //   productCreate.rating = 5;
  //   productCreate.stock = 100;
  //   await productCreate.save();
  //   return res.status(200).send(productCreate);
  // } catch (error) {
  //   return res.status(500).send(error);
  // }

  //   (err, doc) => {
  //   console.log({ err, doc });
  //   res.status(201).json.send(doc);
  // });
};

const replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const productReplace = await productUser.findOneAndReplace(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(201).json(productReplace);
  } catch (error) {
    res.status(400).json(error);
  }
};

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

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const productReplace = await productUser.findOneAndDelete({ _id: id });
    res.status(201).json(productReplace);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllProduct,
  getProduct,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
