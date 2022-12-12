const express = require("express");
const User = require("../models/User");

const router = express.Router();
// this is demo text
router.get("/", (req, res) => {
  res.send("hello worlds this is demo practise ");
});
router.post("/signup", (req, res, next) => {
  const { name, email, phone, password } = req.body;
  console.log(name, email, phone, password);
  const isUserExist = User.findOne({ email: email });

  try {
    if (isUserExist) {
      res
        .status(402)
        .json({ status: "err", message: "User Allready Exist!!!" });
    } else if (!name || !email || !number || !password) {
      res.status(401).json({
        status: "err",
        message: "Please Filled all the required field!!",
      });
    } else {
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
