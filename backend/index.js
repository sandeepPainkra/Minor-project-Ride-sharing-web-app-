const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const DB = process.env.DB;
const PORT = 5000 || process.env.PORT;

mongoose.connect(
  DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (req, res) => {
    console.log("Connection successfully");
  }
);
app.get("/", (req, res) => {
  res.send(
    "hello world this is backend practise of Ridesharing and carpooling app"
  );
});

app.listen(PORT, () => {
  console.log(`server is listening in http://localhost:${PORT}`);
});
