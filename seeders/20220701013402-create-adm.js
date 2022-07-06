'use strict';

const Administradores = require("../models/Admistradores");
const User = require("../models/User");
const { encrypt } = require("../utils/login-utils");

module.exports = {
  async up (queryInterface, Sequelize) {
    const password = encrypt("adm321")
    const user = await User.create({
        email: "adm@narp.com",
        password,
        is_adm: 1
    });

    return queryInterface.bulkInsert('Administradores', 
    [
      {
        user_id: user.id,
        nome: 'ADM',
        setor: 'Geral',
        nivel: 0,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    const user = await User.findOne({email: 'adm@narp.com'});

    await Administradores.destroy({
      where: {
        user_id: user.id
      }
    })

    return queryInterface.bulkDelete('Users', user.id, {});
  }
};
