const Sequelize = require("sequelize");
const database = require("../config/db");
const Alunos = require("./Aluno");


const Pagamentos = database.define("Pagamentos", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  aluno_id: Sequelize.INTEGER,
  valor: Sequelize.DOUBLE,
  status: Sequelize.STRING,
});

//Pagamentos.belongsTo(Alunos, { foreignKey: 'aluno_id' })

module.exports = Pagamentos;
