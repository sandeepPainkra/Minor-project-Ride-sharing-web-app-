const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { DB, PORT } = require("./Keys");
const userRouter = require("./Routes/User");
const cors = require("cors");

app.use(express.json());
app.use(cors());
mongoose.connect(DB, (req, res) => {
  console.log("Connection successfully");
});
app.use("/api/", userRouter);

app.listen(PORT, () => {
  console.log(`server is listening in http://localhost:${PORT}`);
});
