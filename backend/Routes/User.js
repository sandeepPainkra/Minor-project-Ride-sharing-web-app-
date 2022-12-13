const express = require("express");
const User = require("../Models/User");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.send("hello world!!!");
});

userRouter.post("/user/signup", async (req, res) => {
  const isUserExist = await User.findOne({ email: req.body.email });
  if (isUserExist) {
    res.status(200).json({ isUserExist });
  }
});
module.exports = userRouter;
