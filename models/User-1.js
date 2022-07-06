const Sequelize = require('sequelize');
const database = require('../config/db');
const Alunos = require('./Aluno');
const Professores = require('./Professores');
const Administradores = require('./Admistradores');

const User = database.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true
  },
  email: {
    type:Sequelize.STRING,
    allowNull: true,
    unique: true
  },
  is_adm: { type: Sequelize.BOOLEAN},
  password: {type:Sequelize.STRING},
});

//User.hasOne(Alunos);
//User.hasOne(Professores);
//User.hasOne(Administradores)



module.exports = User