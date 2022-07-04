'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Diciplinas',
      [
        { nome: 'Português' },
        { nome: 'Redação' },
        { nome: 'Literatura' },
        { nome: 'Matemática' },
        { nome: 'Fisica' },
        { nome: 'Química' },
        { nome: 'Biologia' },
        { nome: 'Geografia' },
        { nome: 'História' }
      ], {});
  },

  async down(queryInterface, Sequelize) {

    return await queryInterface.bulkDelete('Diciplinas', null, {});

  }
};
