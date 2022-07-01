'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Alunos',
        'modalidade',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Alunos',
        'telefone',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'Alunos',
        'mensalidade',
        Sequelize.DOUBLE
      ),
      queryInterface.addColumn(
        'Alunos',
        'vencimento',
        Sequelize.DATE
      ),
    ])
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'Alunos',
        'modalidade'
      ),
      queryInterface.removeColumn(
        'Alunos',
        'telefone'
      ),
      queryInterface.removeColumn(
        'Alunos',
        'mensalidade'
      ),
      queryInterface.removeColumn(
        'Alunos',
        'vencimento'
      ),
    ])
  }
};
