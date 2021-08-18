'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('books', [{
      isbn: '100TAP',
      judul: 'Jakarta Revengers',
      sinopsis: null,
      penulis: 'Tommy Aji Prabowo',
      genre: 'Action',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      isbn: '102TAP',
      judul: 'Manusia Setengah Salmon',
      sinopsis: null,
      penulis: 'Raditya Dika',
      genre: 'Comedy',
      createdAt: new Date(),
      updatedAt: new Date()
    }])

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('books', null, {})
  }
};
