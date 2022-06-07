require('dotenv').config();

const crypto = require('crypto');

function encrypt(password) {
    var cipher = crypto.createCipher(process.env.ALGOTIMO, process.env.SEGREDO);
    var crypted = cipher.update(password, 'utf-8', 'hex');
    crypted += cipher.final('hex');

    return crypted;
}

function decrypt(password) {
    var decipher = crypto.createCipher(process.env.ALGOTIMO, process.env.SEGREDO);
    var crypted = decipher.update(password, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');

    return decrypted;
}

module.exports = {
    encrypt,
    decrypt
}