const express = require("express");
const Controller = require("../../controller/index");
const auth = require("../../middlewares/check-Auth");
const Routers = express.Router();

//GET API
Routers.post("/signup", Controller.signup);
Routers.post("/login", Controller.login);
Routers.patch("/update", auth, Controller.update);
Routers.delete("/delete", auth, Controller.deleteUser);
Routers.get("/findAllUser", auth, Controller.findAllUser);
Routers.get("/:id", auth, Controller.findByIdUser);

exports.Routers = Routers;
