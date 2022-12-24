const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const { JWT_SECERET_KEY } = require("../Keys");
const LoginRequired = require("../middleware/LoginRequired");
// this is demo practis to check git is working or not
userRouter.get("/", (req, res, next) => {
  res.send("hello world!!!");
});
userRouter.get("/user/res", LoginRequired, (req, res) => {
  res.send("this is restricted page using token !!");
});
userRouter.post("/user/signup", async (req, res) => {
  const { name, email, password, phone, image } = req.body;
  const isUserExist = await User.findOne({ email: email });
  try {
    if (isUserExist) {
      res.status(400).json({ status: "err", error: "User Allready Exist!!" });
    } else if (!name || !email || !phone || !password) {
      res.status(400).json({ status: "err", error: "Fill all the Feild!!" });
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
            res.status(200).json({
              status: "ok",
              user,
              message: "You Account has successfully Created",
            });
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
// res.status(200).json({ message: "Successfull login", result });
userRouter.post("/user/login", async (req, res) => {
  const { name, email, phone, password } = req.body;
  let token;
  try {
    if (!email || !password) {
      res
        .status(400)
        .json({ status: "err", error: "Fill the all the required field!!" });
    } else {
      User.findOne({ email: email }).then((savedUser) => {
        if (!savedUser) {
          res.status(400).json({ status: "err", error: "User Id not found!!" });
        } else {
          bcrypt
            .compare(password, savedUser.password)
            .then((doMatch) => {
              if (doMatch) {
                token = jwt.sign({ _id: savedUser._id }, JWT_SECERET_KEY);
                savedUser.tokens.push({ token: token });
                savedUser.save();

                const { _id, name, email, phone, image } = savedUser;
                res.json({
                  status: "success",
                  message: "You are successfully loged in💚:)",
                  user: {
                    _id,
                    name,
                    phone,
                    email,
                    image,
                    token: savedUser.tokens[savedUser.tokens.length - 1].token,
                  },
                });
                // window.location("/home");
              } else {
                res
                  .status(400)
                  .json({ status: "err", error: "Password doesn't match!!" });
                // window.location("/");
              }
            })
            .catch((err) => console.log(err));
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;
