'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hoadon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hoadon.init({
    shippingcost: DataTypes.INTEGER,
    shippingaddress: DataTypes.STRING,
    shippingphone: DataTypes.INTEGER,
    listdonhang_id: DataTypes.JSON,
    listproductname: DataTypes.JSON,
    nvgh_id: DataTypes.INTEGER,
    khachhang_id: DataTypes.INTEGER,
    trangthaidonhang: DataTypes.STRING,
    totalprice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hoadon',
    freezeTableName: true,
  });
  return hoadon;
};