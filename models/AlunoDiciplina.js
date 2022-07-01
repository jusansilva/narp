const Sequelize = require("sequelize");
const database = require("../config/db");
const Alunos = require("./Aluno");
const Diciplinas = require("./Diciplinas");


const AlunoDiciplina = database.define("Aluno_Diciplina", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  aluno_id: Sequelize.INTEGER,
  diciplina_id: Sequelize.INTEGER,
},{
  tableName: 'Aluno_Diciplina'
});

//AlunoDiciplina.belongsTo(Alunos, { foreignKey: 'aluno_id' })
//AlunoDiciplina.belongsTo(Diciplinas, {foreignKey: 'diciplina_id' })
module.exports = AlunoDiciplina;
