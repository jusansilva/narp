const Sequelize = require("sequelize");
const database = require("../config/db");
const Aulas = require("./Aulas");
const ProfessorDiciplina = require("./ProfessorDiciplina");
const User = require("./User");

const Professores = database.define("Professores", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.STRING
  },
  nome: Sequelize.STRING,
  nasc: { type: Sequelize.DATE },
  logradouro: Sequelize.STRING,
  bairro: Sequelize.STRING,
  numero: Sequelize.INTEGER,
  uf: Sequelize.STRING,
  cep: Sequelize.STRING,
  tipo_documento: Sequelize.STRING,
  documento: Sequelize.STRING,
});

//Professores.belongsTo(User, { foreignKey: 'user_id' })
//Professores.hasOne(Aulas);
//Professores.hasOne(ProfessorDiciplina)

module.exports = Professores;
