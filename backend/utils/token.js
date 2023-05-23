const jwt = require('jsonwebtoken')
require('dotenv').config()

const createJWT = (data) => jwt.sign(data, process.env.JWT_TOKEN_SECRATE, { expiresIn: process.env.TOKEN_EXPIRY || "6d"})

module.exports = {createJWT};