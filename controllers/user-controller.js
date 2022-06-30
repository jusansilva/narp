const { encrypt, decrypt } = require("../utils/login-utils");
const { Op } = require("sequelize");

const User = require("../models/user");

const getUser = async (req, res, next) => {
  try {
    const user = await User.findAll();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: true, message: error });
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error: true, message: error });
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const findUser = await User.findOne({ where: { name, email } });
    if (findUser)
      return res.status(401).json({
        error: true,
        mensager: `email: ${email} já é cadastrado`,
      });

    const cryptPassword = encrypt(password);
    const user = await User.create({ name, email, password: cryptPassword });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error: true, message: error });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    delete req.body.password;

    console.log(req.body);
    if (req.body.email) {
      const getEmail = await User.findAll({
        wherer: {
          email: req.body.email,
          [Op.ne]: { id: id },
        },
      });

      console.log(getEmail);
      if (getEmail) {
        return res.status(401).json({
          error: true,
          message: "email ja cadastrado por outro usuário",
        });
      }
    }
    await User.update(req.body, {
      where: {
        id,
      },
    });
    const user = await User.findByPk(id);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error: true, message: error });
  }
};

const deleteUser = async (req, res, next) => {
  try {
      const { id } = req.params
    await User.destroy({
      where: {
        id: id
      },
    });
    res
      .status(201)
      .json({
        error: false,
        message: `usuário do id: ${id} deletado`,
      });
  } catch (error) {
    return res.status(400).json({ error: true, message: error });
  }
};

module.exports = {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
