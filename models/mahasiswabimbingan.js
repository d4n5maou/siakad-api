'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MahasiswaBimbingan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MahasiswaBimbingan.init({
    id_mahasiswa: DataTypes.INTEGER,
    id_dosen: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MahasiswaBimbingan',
  });
  return MahasiswaBimbingan;
};