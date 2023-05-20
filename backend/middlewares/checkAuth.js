const jwt = require('jsonwebtoken')
require("dotenv").config()

const verifyToken = (req, res, next) => {
    if(!req.headers.token) return res.status(401).json({messgae: "You are not loged in"})
    const token = req.headers?.token.split(" ")[1];

    jwt.verify(token, process.env.JWT_TOKEN_SECRATE ,(err, user) => {
        if(err) return res.status(403).json({message: "token in not valid"});
        if(user) {
            req.user = user;
            next()
        }
    });
}

module.exports = {verifyToken};