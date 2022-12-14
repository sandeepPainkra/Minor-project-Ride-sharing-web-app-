const express = require("express");
const User = require("../Models/User");
const userRouter = express.Router();
const bcrypt = require("bcrypt");

userRouter.get("/", (req, res, next) => {
  res.send("hello world!!!");
});

userRouter.post("/user/signup", async (req, res) => {
  const { name, email, password, phone, image } = req.body;
  const isUserExist = await User.findOne({ email: email });
  try {
    if (isUserExist) {
      res.status(402).json({ status: "err", message: "User Allready Exist!!" });
    } else if (!name || !email || !phone || !password) {
      res.status(402).json({ status: "err", message: "Fill all the Feild!!" });
    } else {
      bcrypt.hash(password, 12, (err, hashed) => {
        if (hashed) {
          const user = new User({
            name,
            email,
            phone,
            image,
            password: hashed,
          });
          user.save().then((user) => {
            res.status(200).json({ status: "ok", user });
          });
        } else {
          console.log("Request Invalid!!!");
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});
 
userRouter.post("/login", (req, res) => {
  const { name, email, phone, password } = req.body;
});

module.exports = userRouter;
