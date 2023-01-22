const mongoose = require("mongoose");

const RiderPostSchema = new mongoose.Schema({
  pickup: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserData",
  },
});

const RiderPost = mongoose.model("RiderPost", RiderPostSchema);
module.exports = RiderPost;
