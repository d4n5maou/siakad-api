const { MahasiswaBimbingan, Mahasiswa, Dosen } = require("../models");
const dosen = require("../models/dosen");

const mahasiswaBimbinganController = {};

/*
    this is auto generate example, you can continue 

*/
mahasiswaBimbinganController.index = async (req, res) => {
  res.json({
    message: "Hello MahasiswaBimbinganController",
  });
};

mahasiswaBimbinganController.create = async (req, res) => {
  const { id_mahasiswa, id_dosen } = req.body;
  try {
    const createMahasiswaBimbingan = await MahasiswaBimbingan.create({
      id_mahasiswa: id_mahasiswa,
      id_dosen: id_dosen,
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

mahasiswaBimbinganController.getAll = async (req, res) => {
  try {
    const getMhsBim = await Dosen.findAll({
      include: [
        {
          model: Mahasiswa,
        },
      ],
    });

    res.status(200).json({
      data: getMhsBim,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

mahasiswaBimbinganController.update = async (req, res) => {
  const { id_mahasiswa, id_dosen } = req.body;
  const id = req.params.id;
  try {
    const getMahasiswaBimbingan = await MahasiswaBimbingan.findOne({
      where: {
        id: id,
      },
    });
    if (getMahasiswaBimbingan === null) {
      return res.status(404).json({
        message: "Data Tidak Ditemukan!",
      });
    }

    const updateMahasiswaBimbingan = await MahasiswaBimbingan.update(
      {
        id_mahasiswa: id_mahasiswa,
        id_dosen: id_dosen,
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

mahasiswaBimbinganController.deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMahasiswaBimbingan = await MahasiswaBimbingan.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: "Data Berhasil Dihapus!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

mahasiswaBimbinganController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getMahasiswaBimbinganById = await MahasiswaBimbingan.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      data: getMahasiswaBimbinganById,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

module.exports = mahasiswaBimbinganController;
