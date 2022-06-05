require('dotenv').config();

const crypto = require('crypto');

const encrypt = (password) => {
    var cipher = crypto.createCipher(process.env.ALGOTIMO, process.env.SEGREDO);
    var crypted = cipher.update(password, 'utf-8', 'hex');
    crypted += cipher.final('hex');

    return crypted;
}

const decrypt = (password) => {
    var decipher  = crypto.createCipher(process.env.ALGOTIMO, process.env.SEGREDO);
    var crypted = decipher.update(password, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');

    return decrypted;
}


module.export={
    decrypt,
    encrypt
}