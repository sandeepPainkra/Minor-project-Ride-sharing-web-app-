const express = require("express");
const LoginRequired = require("../middleware/LoginRequired");
const Post = require("../Models/Post");
const User = require("../Models/User");
const PostRoute = express.Router();

PostRoute.post("/api/offer-ride", LoginRequired, async (req, res) => {
  const userId = req.params.userId;
  const { origin, destination, pessangerCount, date, location, postedBy } =
    req.body;

  try {
    if (!origin || !destination || !pessangerCount || !date) {
      res.json({ status: "err", error: "Filled all the Data!!" });
    } else {
      const response = await Post.create({
        origin,
        destination,
        pessangerCount,
        date,
        location,
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

module.exports = PostRoute;
