const express = require("express");
const LoginRequired = require("../middleware/LoginRequired");
const RiderPost = require("../Models/RiderPost");
const RiderPostRouter = express.Router();

RiderPostRouter.post("/request-ride", LoginRequired, (req, res) => {
  const { pickup, destination, date } = req.body;
  const riderPost = new RiderPost({
    pickup,
    destination,
    date,
    postedBy: req.user,
  });
  riderPost
    .save()
    .then((riderPost) => {
      res.status(200).json({
        status: "ok",
        riderPost,
        message: "Yout have successfully posted your ride request",
      });
    })
    .catch((err) => {
      res.status(400).json({ status: "err", error: "Something went wrong!!" });
    });
});

RiderPostRouter.get("/all-ride", LoginRequired, (req, res) => {
  RiderPost.find()
    .populate("postedBy", "_id name  image")
    .then((ridesData) => {
      res.status(200).json({ status: "ok", ridesData });
    })
    .catch((err) => console.log(err));
});

RiderPostRouter.get("/my-ride", LoginRequired, (req, res) => {
  RiderPost.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name  image")
    .then((myRides) => {
      res.status(200).json({ status: "ok", myRides });
    })
    .catch((err) => console.log(err));
});
module.exports = RiderPostRouter;
