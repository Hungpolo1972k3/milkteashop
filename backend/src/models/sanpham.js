'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sanpham extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  sanpham.init({
    productname: DataTypes.STRING,
    productimagineurl: DataTypes.STRING,
    productprice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sanpham',
    freezeTableName: true
  });
  return sanpham;
};