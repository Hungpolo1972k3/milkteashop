'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('donhang', {
      id:{
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER 
      },
      khachhang_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'khachhang'
          },
          key: "id",
        },
      },
      sanpham_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'sanpham'
          },
          key: 'id',
        },
      },
      size: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sugar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ice: {
        allowNull: false,
        type: Sequelize.STRING
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      topping: {
        type: Sequelize.JSON,
      },
      price: {
        allowNull: false,
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
    await queryInterface.dropTable('donhang');
  }
};