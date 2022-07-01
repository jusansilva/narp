require('dotenv').config();
User = require('../models/user');
const utils = require('../utils/login-utils')
const jwt = require('jsonwebtoken');
const jwtExpirySeconds = 1000


const signIn = async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(401).json({ error: true, message: "usuário ou senha incorreto" })
    }
    const senha = utils.encrypt(password.toString());
    const user = await User.findAll({
        where: {
            email: email,
            password: senha,
            is_adm: true
        }
    })
    const messageError = "usuário ou senha não valido"
    if (!user[0]) return res.redirect(`/sing-in?error=true&message=${messageError}`)

    const token =await jwt.sign({ email, isAdm: user.isAdm }, process.env.SEGREDO, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds,
    })
    res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 })
    res.redirect("/")
}

const verify =async  (req, res, next) => {
    try {
        const {token} = req.cookies
        const decode = await jwt.verify(token, process.env.SEGREDO, function(err, decoded) {
            if(err) return { status: false}

            return {
                status: true,
                email: decoded.email
            }
          });
          return decode
    } catch (error) {
        return {
            status: false
        }
    }
}

module.exports = {
    signIn,
    verify
}
