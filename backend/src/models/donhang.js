'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donhang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  donhang.init({
    khachhang_id: DataTypes.INTEGER,
    sanpham_id: DataTypes.INTEGER,
    size: DataTypes.STRING,
    sugar: DataTypes.STRING,
    ice: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    topping: DataTypes.JSON,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'donhang',
    freezeTableName: true
  });
  return donhang;
};