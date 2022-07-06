const Sequelize = require("sequelize");
const database = require("../config/db");
const User = require("./User");
const AlunoDiciplina = require("./AlunoDiciplina");
const Aulas = require("./Aulas");
const Pagamentos = require("./Pagamentos");

const Alunos = database.define("Alunos", {
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
  nasc: Sequelize.DATE,
  logradouro: Sequelize.STRING,
  bairro: Sequelize.STRING,
  numero: Sequelize.INTEGER,
  uf: Sequelize.STRING,
  cep: Sequelize.STRING,
  instagram: Sequelize.STRING,
  modalidade: Sequelize.STRING,
  telefone: Sequelize.STRING,
  mensalidade: Sequelize.DOUBLE,
  vencimento: Sequelize.DATE,
  pagamento: Sequelize.STRING
});

//Alunos.belongsTo(User, { foreignKey: 'user_id' })
Alunos.hasOne(AlunoDiciplina, { foreignKey: "aluno_id"})
Alunos.hasOne(Aulas)
Alunos.hasOne(Pagamentos)

module.exports = Alunos;
