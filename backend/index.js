const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const DB = process.env.DB;
const PORT = 5000 || process.env.PORT;
const UserRouter = require("./Routes/UserRoutes.js");

mongoose.connect(
  DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (req, res) => {
    console.log("Connection successfully");
  }
);
app.use(express.json());
app.use("/", UserRouter);

app.listen(PORT, () => {
  console.log(`server is listening in http://localhost:${PORT}`);
});
