'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Pagamentos',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        aluno_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          refereces: {
            model: {
              tableName: 'Alunos',
              schema: 'schema'
            },
            key: 'id'
          },
        },
        valor: { type: Sequelize.DOUBLE },
        vencimento: { type: Sequelize.DATE },
        status: { type: Sequelize.STRING },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
      });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('Pagamentos')
  }
};
