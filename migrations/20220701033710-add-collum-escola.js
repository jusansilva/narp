'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.addColumn(
      'Alunos',
      'escola',
      Sequelize.STRING
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.removeColumn(
      'Alunos',
      'escola'
    );
  }
};
