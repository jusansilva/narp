'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('Administradores',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          refereces: {
            model:{
            tableName: 'Users',
            schema: 'schema'
            },
            key: 'id'
          },
        },
        nome: { type: Sequelize.STRING },
        Setor: { type: Sequelize.STRING },
        nivel: { type: Sequelize.INTEGER },
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

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('Professores')
  }
};
