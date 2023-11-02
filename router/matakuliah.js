const express = require("express");
const matkulController = require("../controller/matkulController.js");
const routeMatkul = express.Router();

routeMatkul.post("/", matkulController.create);
routeMatkul.get("/get", matkulController.getAll);
routeMatkul.get("/get/:id", matkulController.getById);
routeMatkul.put("/update/:id", matkulController.update);
routeMatkul.delete("/delete/:id", matkulController.deleteById);

module.exports = routeMatkul;
