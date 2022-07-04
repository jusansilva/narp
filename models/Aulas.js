const Sequelize = require("sequelize");
const database = require("../config/db");
const Alunos = require("./Aluno");
const Diciplinas = require("./Diciplinas");
const Professores = require("./Professores");


const Aulas = database.define("Aulas", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  aluno_id: Sequelize.INTEGER,
  professor_id: Sequelize.INTEGER,
  diciplina_id: Sequelize.INTEGER,
  is_start: Sequelize.DATE,
  duracao: Sequelize.INTEGER,
});

//Aulas.belongsTo(Professores, { foreignKey: 'professor_id' })
//Aulas.belongsTo(Alunos, { foreignKey: 'aluno_id' })
//Aulas.belongsTo(Diciplinas, {foreignKey: 'diciplina_id' })

module.exports = Aulas;
