const Sequelize = require("sequelize");
const database = require("../config/db");
const AlunoDiciplina = require("./AlunoDiciplina");
const Aulas = require("./Aulas");
const ProfessorDiciplina = require("./ProfessorDiciplina");

const Diciplinas = database.define("Diciplinas", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  nome: Sequelize.STRING,
});

//Diciplinas.hasOne(AlunoDiciplina)
//Diciplinas.hasOne(ProfessorDiciplina)
//Diciplinas.hasOne(Aulas)


module.exports = Diciplinas;
