const { Mahasiswa } = require("../models");

const mahasiswaController = {};

/*
    this is auto generate example, you can continue 

*/
mahasiswaController.index = async (req, res) => {
  res.json({
    message: "Hello mahasiswaController",
  });
};

mahasiswaController.create = async (req, res) => {
  const { nama, nim, alamat } = req.body;
  try {
    const createMahasiswa = await Mahasiswa.create({
      nama: nama,
      nim: nim,
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

mahasiswaController.getAll = async (req, res) => {
  try {
    const getMahasiswa = await Mahasiswa.findAll({
      order: [["createdAt", "DESC"]],
    });
    return res.status(200).json({
      data: getMahasiswa,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

mahasiswaController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getMahasiswaById = await Mahasiswa.findOne({
      where: {
        id: id,
      },
    });
    if (getMahasiswaById === null) {
      return res.status(404).json({
        message: "Data Tidak Ditemukan!",
      });
    }

    return res.status(200).json({
      data: getMahasiswaById,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

mahasiswaController.update = async (req, res) => {
  const { nama, nim, alamat } = req.body;
  const id = req.params.id;
  try {
    const getMahasiswaById = await Mahasiswa.findOne({
      where: {
        id: id,
      },
    });
    if (getMahasiswaById === null) {
      return res.status(404).json({
        message: "Data Tidak Ditemukan!",
      });
    }

    const updateMahasiswa = await Mahasiswa.update(
      {
        nama: nama,
        nim: nim,
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

mahasiswaController.deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const getMahasiswaById = await Mahasiswa.findOne({
      where: {
        id: id,
      },
    });
    if (getMahasiswaById === null) {
      return res.status(404).json({
        message: "Data Tidak Ditemukan!",
      });
    }

    const deleteMahasiswaById = await Mahasiswa.destroy({
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

module.exports = mahasiswaController;
