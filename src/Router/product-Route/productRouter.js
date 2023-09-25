const express = require("express");
// const productController = require("../../controller/product-controller/productController");
const Router = express.Router();
const Controller = require("../../controller/index");

//GET API
Router.get("/", Controller.getAllProduct)
  .get("/:id", Controller.getProduct)
  //POST API
  .post("/", Controller.createProduct)
  //PUT API
  .put("/:id", Controller.replaceProduct)
  //PATCH API
  .patch("/:id", Controller.updateProduct)
  //DELET API
  .delete("/:id", Controller.deleteProduct);

exports.Router = Router;
