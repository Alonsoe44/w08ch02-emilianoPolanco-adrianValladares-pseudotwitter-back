const express = require("express");
const {
  getTweetsController,
  createTweetController,
} = require("../controllers/tweetsControllers");

const tweetsRouter = express.Router();

tweetsRouter.get("/", getTweetsController);
tweetsRouter.post("/", createTweetController);

module.exports = tweetsRouter;
