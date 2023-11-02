const express = require("express");
const jadwalMatkulController = require("../controller/jadwalMatkulController.js");
const routeJdMatkul = express.Router();

routeJdMatkul.post("/", jadwalMatkulController.create);
routeJdMatkul.get("/get", jadwalMatkulController.getAll);
routeJdMatkul.get("/get/:id", jadwalMatkulController.getById);
routeJdMatkul.put("/update/:id", jadwalMatkulController.update);
routeJdMatkul.delete("/delete/:id", jadwalMatkulController.deleteById);

module.exports = routeJdMatkul;
