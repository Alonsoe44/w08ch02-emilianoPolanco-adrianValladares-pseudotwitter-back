const Tuit = require("../../database/models/Tweet");

const getTweetsController = async (req, res) => {
  const tweets = await Tuit.find();
  res.json({ tweets });
};

const createTweetController = async (req, res, next) => {
  try {
    const tweetCreation = await Tuit.create(req.body);
    res.status(201).json(tweetCreation);
  } catch (error) {
    error.status = 400;
    error.message = "Your did a bad request, robot not created";
    next(error);
  }
};

module.exports = {
  getTweetsController,
  createTweetController,
};
