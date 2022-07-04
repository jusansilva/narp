'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        email: { type: Sequelize.STRING },
        password: { type: Sequelize.STRING },
        is_adm: { type: Sequelize.BOOLEAN },
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
    return await queryInterface.dropTable('Users')
  }
};
