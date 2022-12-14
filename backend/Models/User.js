const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { JWT_SECERET_KEY } = require("../Keys");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("UserData", userSchema);
