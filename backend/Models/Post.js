const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  pessangerCount: {
    type: Number,
  },
  date: {
    type: String,
  },
  location: {
    type: Array,
    coordinates: [],
  },
  time: {
    type: String,
    required: true,
  },
  charges: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  registrationNo: {
    type: String,
    required: true,
  },
  vehiclePic: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserData",
  },
});
const Post = mongoose.model("RideCollection", PostSchema);

module.exports = Post;
