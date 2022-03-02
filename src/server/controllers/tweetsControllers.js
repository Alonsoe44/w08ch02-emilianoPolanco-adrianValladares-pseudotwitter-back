const Tuit = require("../../database/models/Tweet");

const getTweetsController = async (req, res) => {
  const tweets = await Tuit.find();
  res.json({ tweets });
};

const createTweetController = async (req, res, next) => {
  try {
    const { tweet } = req.body;
    const tweetCreation = await Tuit.create(tweet);
    res.status(201).json(tweetCreation);
  } catch (error) {
    error.status = 400;
    error.message = "Bad request, tweet not created";
    next(error);
  }
};

module.exports = {
  getTweetsController,
  createTweetController,
};
