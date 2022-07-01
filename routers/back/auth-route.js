const express = require('express');

const { signIn, reflesh, verify } = require('../../controllers/auth-controllers');

const router = express.Router();

router.post("/", signIn);

//router.get("/", verify);

module.exports = {
    routes: router
}