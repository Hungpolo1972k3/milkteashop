'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('hoadon', {
        id:{
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER 
        },
        khachhang_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: "khachhang"
            },
            key: "id"
          },
        },
        nvgh_id: {
          type: Sequelize.INTEGER,
          references: {
            model: {
              tableName: 'bengiaohang'
            },
            key: 'id',
          },
         },
        shippingcost: {
          type: Sequelize.INTEGER
        },
        shippingaddress: {
          type: Sequelize.STRING
      },
        shippingphone:{
          type: Sequelize.INTEGER
      },  
      listdonhang_id: {
        type: Sequelize.Sequelize.JSON
      },
      listproductname:{
        type: Sequelize.Sequelize.JSON
      },  
      trangthaidonhang: {
        type: Sequelize.STRING
      },
      totalprice: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      } 
      });
      },
    down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hoadon');
    }
};