const Sequelize = require("sequelize");
const database = require("../config/db");
const Professores = require("./Professores");
const Diciplinas = require("./Diciplinas");


const ProfessorDiciplina = database.define("Professor_Diciplina", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  Professor_id: Sequelize.INTEGER,
  diciplina_id: Sequelize.INTEGER,
});

//ProfessorDiciplina.belongsTo(Professores, { foreignKey: 'Professor_id' })
//ProfessorDiciplina.belongsTo(Diciplinas, {foreignKey: 'diciplina_id' })

module.exports = ProfessorDiciplina;
