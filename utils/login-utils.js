require('dotenv').config();

const crypto = require('crypto');

function encrypt(password) {

    const hash =  crypto.createHash(process.env.ALGORITIMO, process.env.SEGREDO).update(password).digest('hex');
    
    return hash;
}

function decrypt(password) {
    const hash = crypto.Decipher(process.env.ALGOTIMO, process.env.SEGREDO).update(password);
    
    return hash;
}

module.exports = {
    encrypt,
    decrypt
}