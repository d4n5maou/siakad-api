const { Dosen, MataKuliah, DosenMatkul } = require("../models");

const dosenMatkulController = {};

/*
    this is auto generate example, you can continue 

*/
dosenMatkulController.index = async (req, res) => {
  res.json({
    message: "Hello dosenMatkulController",
  });
};

dosenMatkulController.create = async (req, res) => {
  const { id_dosen, id_matkul } = req.body;
  try {
    const getDosen = await Dosen.findOne({
      where: {
        id: id_dosen,
      },
    });
    const getMatkul = await MataKuliah.findOne({
      where: {
        id: id_matkul,
      },
    });
    if (getDosen === null || getMatkul === null) {
      throw Error("Data Tidak Ditemukan!");
    } else {
      const createDsnMat = await DosenMatkul.create({
        id_dosen: getDosen.id,
        id_matkul: getMatkul.id,
      });

      return res.status(201).json({
        message: "Data Berhasil Ditambahkan!",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

dosenMatkulController.getAll = async (req, res) => {
  try {
    const getDsnMat = await Dosen.findAll({
      include: [
        {
          model: MataKuliah,
        },
      ],
    });

    res.status(200).json({
      data: getDsnMat,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

dosenMatkulController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getDsnMat = await Dosen.findAll({
      include: [
        {
          model: MataKuliah,
        },
      ],
      where: {
        id: id,
      },
    });

    res.status(200).json({
      data: getDsnMat,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

dosenMatkulController.update = async (req, res) => {
  const { id_dosen, id_matkul } = req.body;
  const id = req.params.id;
  try {
    const getDosen = await Dosen.findOne({
      where: {
        id: id_dosen,
      },
    });
    const getMatkul = await MataKuliah.findOne({
      where: {
        id: id_matkul,
      },
    });
    if (getDosen === null || getMatkul === null) {
      throw Error("Data Tidak Ditemukan!");
    } else {
      const createDsnMat = await DosenMatkul.update(
        {
          id_dosen: getDosen.id,
          id_matkul: getMatkul.id,
        },
        {
          where: {
            id: id,
          },
        }
      );
    }

    return res.status(201).json({
      message: "Data Berhasil Diubah!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

dosenMatkulController.deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const getDsnMat = await DosenMatkul.findOne({
      where: {
        id: id,
      },
    });
    if (getDsnMat === null) {
      return res.status(404).json({
        message: "Data Tidak Ditemukan!",
      });
    }

    const deleteDsnMatById = await DosenMatkul.destroy({
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

module.exports = dosenMatkulController;
