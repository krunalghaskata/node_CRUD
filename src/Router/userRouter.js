const express = require("express");
const userController = require("../controller/userController");
const Routers = express.Router();

//GET API
Routers.get("/", userController.getAllclient)
  .get("/:id", userController.getclient)
  //POST API
  .post("/", userController.newclient)
  //PUT API
  .put("/:id", userController.replaceclient)
  //PATCH API
  .patch("/:id", userController.updateclient)
  //DELET API
  .delete("/:id", userController.deletclient);

exports.Routers = Routers;
