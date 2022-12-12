const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello worlds this is demo practise ");
});
router.post("/signup", (req, res, next) => {
  const { name, email, phone, password } = req.body;
  console.log(name, email, phone, password);
});
module.exports = router;
