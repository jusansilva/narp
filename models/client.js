'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init({
    user_id: DataTypes.STRING,
    birth_date: DataTypes.INTEGER,
    andress: DataTypes.STRING,
    district: DataTypes.STRING,
    answerable: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    adm_answerable: DataTypes.INTEGER,
    pay_day: DataTypes.INTEGER,
    plan_id: DataTypes.INTEGER,
    school_id: DataTypes.INTEGER,
    subjects_ids: DataTypes.STRING,
    instagram: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};