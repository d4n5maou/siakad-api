const { JadwalMatkul, MataKuliah } = require("../models");

const jadwalMatkulController = {};

/*
    this is auto generate example, you can continue 

*/
jadwalMatkulController.index = async (req, res) => {
  res.json({
    message: "Hello jadwalMatkulController",
  });
};

jadwalMatkulController.create = async (req, res) => {
  const { id_matkul, hari, jam } = req.body;
  try {
    const createJadwalMatkul = await JadwalMatkul.create({
      id_matkul: id_matkul,
      hari: hari,
      jam: jam,
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

jadwalMatkulController.getAll = async (req, res) => {
  try {
    const getJadwalMatkul = await MataKuliah.findAll({
      include: [
        {
          model: JadwalMatkul,
        },
      ],
    });

    res.status(200).json({
      data: getJadwalMatkul,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

jadwalMatkulController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getJadwalMatkulById = await JadwalMatkul.findOne({
      where: {
        id_matkul: id,
      },
    });
    if (getJadwalMatkulById === null) {
      return res.status(404).json({
        message: "Data Tidak Ditemukan!",
      });
    }

    return res.status(200).json({
      data: getJadwalMatkulById,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

jadwalMatkulController.update = async (req, res) => {
  const { id_matkul, hari, jam } = req.body;
  const id = req.params.id;
  try {
    const getJadwalMatkulById = await JadwalMatkul.findOne({
      where: {
        id: id,
      },
    });
    if (getJadwalMatkulById === null) {
      return res.status(404).json({
        message: "Data Tidak Ditemukan!",
      });
    }

    const updateJadwalMatkul = await JadwalMatkul.update(
      {
        id_matkul: id_matkul,
        hari: hari,
        jam: jam,
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

jadwalMatkulController.deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const getJadwalMatkulById = await JadwalMatkul.findOne({
      where: {
        id: id,
      },
    });
    if (getJadwalMatkulById === null) {
      return res.status(404).json({
        message: "Data Tidak Ditemukan!",
      });
    }

    const deleteJadwalMatkulById = await JadwalMatkul.destroy({
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

module.exports = jadwalMatkulController;
