const { Sequelize } = require ('sequelize')

const sequelize = new Sequelize('milkteashop', 'root', null,{
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    timezone: "+07:00",
    query:{
      raw: true
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
});
let connectDB = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
module.exports =  connectDB;