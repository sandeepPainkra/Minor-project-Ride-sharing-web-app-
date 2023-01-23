const express = require("express");
const LoginRequired = require("../middleware/LoginRequired");
const Post = require("../Models/Post");
const User = require("../Models/User");
const PostRoute = express.Router();

PostRoute.post("/api/offer-ride", LoginRequired, async (req, res) => {
  const userId = req.params.userId;
  const {
    origin,
    destination,
    pessangerCount,
    date,
    location,
    postedBy,
    time,
    charges,
    brand,
    model,
    year,
    registrationNo,
    vehiclePic,
  } = req.body;

  try {
    if (
      !origin ||
      !destination ||
      !pessangerCount ||
      !date ||
      !time ||
      !charges ||
      !brand ||
      !model ||
      !year ||
      !registrationNo ||
      !vehiclePic
    ) {
      res.json({ status: "err", error: "Filled all the Data!!" });
    } else {
      console.log(location);
      const response = await Post.create({
        origin,
        destination,
        pessangerCount,
        date,
        location,
        time,
        charges,
        brand,
        model,
        year,
        registrationNo,
        vehiclePic,
        postedBy: req.user,
      })
        .then((response) => {
          res.json({
            status: "success",
            message: "Successfully posted a Ride Offer",
            response,
          });
        })

        .catch((err) => {
          console.log(err);
        });
    }
  } catch (error) {
    console.log(error);
  }
});
PostRoute.get("/api/myallride", LoginRequired, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy")
    .then((posts) => {
      res.json({ status: "ok", posts });
    })
    .catch((err) => console.log(err));
});
PostRoute.get("/api/allrides", (req, res) => {
  Post.find()
    .populate("postedBy", "_id name phone image")
    .then((posts) => {
      res.json({ status: "ok", posts });
    })
    .catch((err) => console.log(err));
});
module.exports = PostRoute;
