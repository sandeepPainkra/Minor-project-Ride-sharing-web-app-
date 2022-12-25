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
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Post = mongoose.model("RideCollection", PostSchema);

module.exports = Post;
