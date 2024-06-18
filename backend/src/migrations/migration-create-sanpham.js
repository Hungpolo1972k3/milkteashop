'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sanpham', {
      id:{
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER 
      }, 
      productname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      productimagineurl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      productprice: {
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
    await queryInterface.dropTable('sanpham');
  }
};