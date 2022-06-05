'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'Users',
          key: 'id'
        },
        allowNull: false,
      },
      birth_date: {
        type: Sequelize.INTEGER
      },
      andress: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      answerable: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING
      },
      adm_answerable: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false,
      },
      pay_day: {
        type: Sequelize.INTEGER
      },
      plan_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Plans',
          key: 'id'
        },
        allowNull: false,
      },
      school_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Schools',
          key: 'id'
        },
        allowNull: false,
      },
      subjects_ids: {
        type: Sequelize.STRING,
      },
      instagram: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clients');
  }
};