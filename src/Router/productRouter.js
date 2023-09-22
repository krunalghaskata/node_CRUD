const express = require("express");
const productController = require("../controller/productController");
const Router = express.Router();

//GET API
Router.get("/", productController.getAllProduct)
  .get("/:id", productController.getProduct)
  //POST API
  .post("/", productController.createProduct)
  //PUT API
  .put("/:id", productController.replaceProduct)
  //PATCH API
  .patch("/:id", productController.updateProduct)
  //DELET API
  .delete("/:id", productController.deleteProduct);

exports.Router = Router;
