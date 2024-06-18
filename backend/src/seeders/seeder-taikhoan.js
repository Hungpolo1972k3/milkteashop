const khachhang = require('../models/khachhang');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('khachhang', [
      {
        userid: 123456,
        username: 'NguyenThoHung',
        password: '123456',
        fullname: 'Nguyễn Thọ Hùng',
        phonenumber: '0702124299',
        address: 'Hà Đông, Hà Nội',
        createdAt: new Date(),
        updatedAt: new Date(),
        makhachhang: "abcde"
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete('Taikhoan', null, {});
  },
};