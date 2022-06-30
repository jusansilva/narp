const Sequelize = require('sequelize');
const database = require('../config/db');
const Client = require('./client');

const User = database.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true
  },
  name: {
    type:Sequelize.STRING,
    allowNull: true
  },
  email: {
    type:Sequelize.STRING,
    allowNull: true,
    unique: true
  },
  password: {type:Sequelize.STRING},
  token: {type:Sequelize.STRING}

})

module.exports = User