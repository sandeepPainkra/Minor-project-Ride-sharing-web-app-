const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { DB, PORT } = require("./Keys");
const userRouter = require("./Routes/User.js");
const cors = require("cors");
const PostRoute = require("./Routes/Post.js");
const RiderPostRouter = require("./Routes/RiderPost.js");

app.use(express.json());
app.use(cors());
mongoose
  .connect(DB)
  .then((req, res) => {
    console.log("Connection successfully");
  })
  .catch((err) => console.log(err));
app.use("/api/", userRouter);

app.use("/ride/search-ride", RiderPostRouter);
app.use("/ride", PostRoute);
app.listen(PORT, () => {
  console.log(`server is listening in http://localhost:${PORT}`);
});
