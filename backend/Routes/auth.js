const route = require("express").Router()
const User = require("../Models/Users");
const { verifyToken } = require("../middlewares/checkAuth");
const { createJWT } = require("../utils/token")

//login route
route.post("/login", async (req, res) => {
    const { email, password, forSeller } = req.body;
    if(!email || !password) return res.status(402).json({message: "all feild's are required"})
  
    try {
      const user = await User.findOne({ email: email }).exec();
      if(!user) return res.status(404).json({ message: "No user found with this Email ID" });
      if (user.password !== password) return res.status(400).json({ message: "your password with this email dosent Matched" })

      const token = createJWT({id: user._id})
      
      const finalUser = {...user._doc, token}
      delete finalUser.password;
      res.status(200).json({...finalUser, token})
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  });

  route.post("/register", verifyToken ,async (req, res) => {

    const {email, password, name} = req.body
    if(!email || !password || !name) return res.status(402).json({message: "all feild's are required"})
    try {
      await User.create(req.body);
      res.status(200).json({ message: "register successfull" });
    } catch (error) {
      console.log(error)
      if (error.code === 11000) {
        return res.status(401).json({ message: `user with this ${Object.keys(error.keyPattern)[0]} already exist` });
      }
      res.status(500).json({ message: "internal server error" });
    }
  });

  module.exports = route