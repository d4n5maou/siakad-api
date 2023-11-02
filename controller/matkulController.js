const { MataKuliah } = require("../models");

const matkulController = {};

/*
    this is auto generate example, you can continue 

*/
matkulController.index = async (req, res) => {
  res.json({
    message: "Hello matkulController",
  });
};

matkulController.create = async (req, res) => {
  const { kode_matkul, nama, sks } = req.body;
  try {
    const createMatkul = await MataKuliah.create({
      kode_matkul: kode_matkul,
      nama: nama,
      sks: sks,
    });
    return res.status(201).json({
      message: "Data Berhasil Ditambahkan!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

matkulController.getAll = async (req, res) => {
  try {
    const getMatakuliah = await MataKuliah.findAll({
      order: [["createdAt", "DESC"]],
    });
    return res.status(200).json({
      data: getMatakuliah,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

matkulController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getMatakuliahById = await MataKuliah.findOne({
      where: {
        id: id,
      },
    });
    if (getMatakuliahById === null) {
      return res.status(404).json({
        message: "Data Tidak Ditemukan!",
      });
    }

    return res.status(200).json({
      data: getMatakuliahById,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

matkulController.update = async (req, res) => {
  const { kode_matkul, nama, sks } = req.body;
  const id = req.params.id;
  try {
    const getMatakuliahById = await MataKuliah.findOne({
      where: {
        id: id,
      },
    });
    if (getMatakuliahById === null) {
      return res.status(404).json({
        message: "Data Tidak Ditemukan!",
      });
    }

    const updateMatakuliah = await MataKuliah.update(
      {
        kode_matkul: kode_matkul,
        nama: nama,
        sks: sks,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(201).json({
      message: "Data Berhasil Diubah!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

matkulController.deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const getMatakuliahById = await MataKuliah.findOne({
      where: {
        id: id,
      },
    });
    if (getMatakuliahById === null) {
      return res.status(404).json({
        message: "Data Tidak Ditemukan!",
      });
    }

    const deleteMatakuliahById = await MataKuliah.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: "Data Berhasil Dihapus!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

module.exports = matkulController;
