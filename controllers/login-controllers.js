User = require('../models/user');
const utils = require('../utils/login-utils')

const signIn = (req, res, next) => {
    const { username, password } = req.body

    if (!username || !password || users[username] !== password) {
        return res.status(401).json({ error: true, message: "usuário ou senha incorreto" })
    }

    const user = await User.findAll({
        where: {
            name: username,
            password: utils.encrypt(password)
        }
    })

    if (!user[0]) res.status(401).json({ error: true, message: "usuário ou senha incorreto" })

    const token = jwt.sign({ username }, jwtKey, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds,
    })
   
    res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 })
    res.end()
}

const refresh = (req, res, next) => {

}


