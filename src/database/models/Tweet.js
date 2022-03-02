const { Schema, model } = require("mongoose");

const TweetSchema = new Schema({
  date: {
    type: Date,
    default: Date.now(),
  },

  text: {
    type: String,
    minlength: 1,
    maxlength: 200,
    required: true,
  },

  likes: {
    type: Number,
    default: 0,
  },
});

const Tuit = model("Tweet", TweetSchema, "tuits");

module.exports = Tuit;
