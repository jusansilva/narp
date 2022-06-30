const Sequelize = require("sequelize");
const database = require("../config/db");
const User = require("./user");

const Client = database.define("Client", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.STRING
  },
  birth_date: Sequelize.INTEGER,
  andress: Sequelize.STRING,
  district: Sequelize.STRING,
  answerable: Sequelize.INTEGER,
  phone: Sequelize.STRING,
  adm_answerable: Sequelize.INTEGER,
  pay_day: Sequelize.INTEGER,
  plan_id: Sequelize.INTEGER,
  school_id: Sequelize.INTEGER,
  subjects_ids: Sequelize.STRING,
  instagram: Sequelize.STRING,
  payment_status: Sequelize.STRING
});

Client.belongsTo(User, {foreignKey: 'user_id'})

module.exports = Client;
