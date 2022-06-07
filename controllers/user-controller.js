const { User } = require('../models/user');
const { encrypt, decrypt } = require('../utils/login-utils');
const { db } = require('../models/index');

const getUser = async (req, res, next) => {

}

const getUserById = async (req, res, next) => {

}

const createUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    const cryptPassword = encrypt(password)
    const user ={}
   // const user = query(`INSERT INTO users (name, email, password, created_at, updated_at)
    //VALUES ('${name}', '${email}', '${cryptPassword}', datetime('now'), datetime('now'))`)

    return res.json(user).status(201);

}

const updateUser = async (req, res, next) => {

}

const deleteUser = async (req, res, next) => {

}


module.exports = {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}