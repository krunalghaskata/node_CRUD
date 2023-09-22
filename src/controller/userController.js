const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const user = data.users;

const getAllclient = (req, res) => {
  res.json(user);
};

const getclient = (req, res) => {
  const id = +req.params.id;
  const users = user.find((p) => p.id === id);
  res.json(users);
};

const newclient = (req, res) => {
  const addUser = req.body;
  user.push(addUser);
  res.status(201).json(addUser);
};

const replaceclient = (req, res) => {
  const id = +req.params.id;
  const userss = user.findIndex((p) => p.id === id);
  user.splice(userss, 1, { ...req.body, id: id });
  res.status(201).json(user);
};

const updateclient = (req, res) => {
  const id = +req.params.id;
  const userss = user.findIndex((p) => p.id === id);
  userts = user[userss];
  user.splice(userss, 1, { ...userts, ...req.body });
  res.status(201).json(userts);
};

const deletclient = (req, res) => {
  const id = +req.params.id;
  const userss = user.findIndex((p) => p.id === id);
  userts = user[userss];
  user.splice(userss, 1);
  res.status(201).json(user);
};

module.exports = {
  getAllclient,
  getclient,
  newclient,
  replaceclient,
  updateclient,
  deletclient,
};
