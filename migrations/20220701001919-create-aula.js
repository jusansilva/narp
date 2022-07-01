'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Aula',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        professor_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          refereces: {
            model: {
              tableName: 'Professores',
              schema: 'schema'
            },
            key: 'id'
          },
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
        diciplina_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          refereces: {
            model: {
              tableName: 'Diciplinas',
              schema: 'schema'
            },
            key: 'id'
          },
        },
        is_start: { type: Sequelize.DATE },
        duracao: { type: Sequelize.INTEGER },
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
    return await queryInterface.dropTable('Aula')
  }
};
