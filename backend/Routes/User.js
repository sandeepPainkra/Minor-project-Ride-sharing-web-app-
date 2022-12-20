const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const { JWT_SECERET_KEY } = require("../Keys");
const LoginRequired = require("../middleware/LoginRequired");

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
      res.status(401).json({ status: "err", message: "User Allready Exist!!" });
    } else if (!name || !email || !phone || !password) {
      res.status(401).json({ status: "err", message: "Fill all the Feild!!" });
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
            res
              .status(200)
              .json({
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
      res.status(400).json({ error: "Fill the all the required field!!" });
    } else {
      User.findOne({ email: email }).then((savedUser) => {
        if (!savedUser) {
          res.status(401).json({ error: "User Id not found!!" });
        } else {
          bcrypt
            .compare(password, savedUser.password)
            .then((doMatch) => {
              if (doMatch) {
                token = jwt.sign({ _id: savedUser._id }, JWT_SECERET_KEY);
                savedUser.tokens.push({ token: token });
                savedUser.save();

                const { _id, name, email } = savedUser;
                res.json({
                  message: "success",
                  user: { _id, name, email, token: savedUser.tokens[0].token },
                });
                // window.location("/home");
              } else {
                res.status(401).json({ error: "Password doesn't match!!" });
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
