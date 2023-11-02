const express = require("express");
const mahasiswaBimbinganController = require("../controller/mahasiswaBimbinganController.js");
const routeMhsBim = express.Router();

routeMhsBim.post("/", mahasiswaBimbinganController.create);
routeMhsBim.get("/get", mahasiswaBimbinganController.getAll);
routeMhsBim.get("/get/:id", mahasiswaBimbinganController.getById);
routeMhsBim.put("/update/:id", mahasiswaBimbinganController.update);
routeMhsBim.delete("/delete/:id", mahasiswaBimbinganController.deleteById);

module.exports = routeMhsBim;
