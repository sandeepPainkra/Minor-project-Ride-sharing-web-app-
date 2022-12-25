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
  //   location: {
  //     type: { type: String },
  //     coordinates: [],
  //   },
  location: [
    {
      coordinates: {
        type: String,
      },
    },
  ],
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Post = mongoose.model("RideCollection", PostSchema);

module.exports = Post;
