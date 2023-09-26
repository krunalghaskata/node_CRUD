const express = require("express");
const Controller = require("../../controller/index");

const Routers = express.Router();

//GET API
Routers
  //.get("/", Controller.getAlluser)
  //.get("/:id", Controller.getUserById)
  //POST API
  .post("/signup", Controller.signup)
  .post("/login", Controller.login);
//PATCH API
//.patch("/:id", Controller.update)
//DELET API
// .delete("/:id", Controller.delet);

exports.Routers = Routers;
