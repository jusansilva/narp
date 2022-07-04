'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('Professores',
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
        nasc: { type: Sequelize.DATE },
        logradouro: { type: Sequelize.STRING },
        bairro: { type: Sequelize.STRING },
        numero: { type: Sequelize.INTEGER },
        uf: { type: Sequelize.STRING },
        cep: { type: Sequelize.STRING },
        tipo_documento: { type: Sequelize.STRING },
        documento: { type: Sequelize.STRING },
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
