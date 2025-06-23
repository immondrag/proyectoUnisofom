const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  album: { type: mongoose.Schema.Types.ObjectId, ref: "Album" },
  description: { type: String, required: true },
  photoImage: { type: String, required: true },
  date: { type: Date, default: Date.now },
  privacy: { type: String },
  likes: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: "User" } }],
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      text: { type: String, required: true },
      name: { type: String },
      date: { type: Date, default: Date.now },
    },
  ],
  classifier1: { type: mongoose.Schema.Types.ObjectId, ref: "Classifier1" },
  classifier2: { type: mongoose.Schema.Types.ObjectId, ref: "Classifier2" },
});

module.exports = Photo = mongoose.model("Photo", photoSchema);
