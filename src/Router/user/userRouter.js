const express = require("express");
const Controller = require("../../controller/index");

const Routers = express.Router();

//GET API
Routers.post("/signup", Controller.signup);
Routers.post("/login", Controller.login);
Routers.patch("/update", Controller.update);
Routers.delete("/delete", Controller.deleteUser);

exports.Routers = Routers;
