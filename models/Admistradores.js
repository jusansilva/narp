const Sequelize = require("sequelize");
const database = require("../config/db");
const User = require("./User");

const Administradores = database.define("Administradores", {
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
  Setor: { type: Sequelize.STRING },
  nivel: Sequelize.INTEGER,
});

//Administradores.belongsTo(User, { foreignKey: 'user_id' })
module.exports = Administradores;
