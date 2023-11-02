const { Dosen } = require("../models");

const dosenController = {};

/*
    this is auto generate example, you can continue 

*/
dosenController.index = async (req, res) => {
  res.json({
    message: "Hello dosenController",
  });
};

dosenController.create = async (req, res) => {
  const { nidn, nama, alamat } = req.body;
  try {
    const createDosen = await Dosen.create({
      nidn: nidn,
      nama: nama,
      alamat: alamat,
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

dosenController.getAll = async (req, res) => {
  try {
    const getDosen = await Dosen.findAll({
      order: [["createdAt", "DESC"]],
    });
    return res.status(200).json({
      data: getDosen,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

dosenController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getDosenById = await Dosen.findOne({
      where: {
        id: id,
      },
    });
    if (getDosenById === null) {
      return res.status(404).json({
        message: "Data Tidak Ditemukan!",
      });
    }

    return res.status(200).json({
      data: getDosenById,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

dosenController.update = async (req, res) => {
  const { nidn, nama, alamat } = req.body;
  const id = req.params.id;
  try {
    const getDosenById = await Dosen.findOne({
      where: {
        id: id,
      },
    });
    if (getDosenById === null) {
      return res.status(404).json({
        message: "Data Tidak Ditemukan!",
      });
    }

    const updateDosen = await Dosen.update(
      {
        nidn: nidn,
        nama: nama,
        alamat: alamat,
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

dosenController.deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const getDosenById = await Dosen.findOne({
      where: {
        id: id,
      },
    });
    if (getDosenById === null) {
      return res.status(404).json({
        message: "Data Tidak Ditemukan!",
      });
    }

    const deleteDosenById = await Dosen.destroy({
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

module.exports = dosenController;
