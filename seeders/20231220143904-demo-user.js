'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
       identity: '3278012602980005',
       name: 'Lerian Febriana',
       email: 'kanglerian@gmail.com',
       password: 'lerian123',
       role: 'A',
       status: true,
       createdAt: new Date(),
       updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
