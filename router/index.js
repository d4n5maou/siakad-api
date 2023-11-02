const express = require("express");
const exampleController = require("../controller/exampleController");
const routeMahasiswa = require("./mahasiswa.js");
const routeDosen = require("./dosen.js");
const routeMatkul = require("./matakuliah.js");
const routeDsnMat = require("./dosenmatkul");
const routeJdMatkul = require("./jadwalmatkul");
const routeMhsBim = require("./mahasiswabimbingan");
const route = express.Router();

route.get("/", exampleController.index);
route.use("/mahasiswa", routeMahasiswa);
route.use("/dosen", routeDosen);
route.use("/matakuliah", routeMatkul);
route.use("/dosen-matkul", routeDsnMat);
route.use("/jadwal", routeJdMatkul);
route.use("/mahasiswa-bimbingan", routeMhsBim);

module.exports = route;
