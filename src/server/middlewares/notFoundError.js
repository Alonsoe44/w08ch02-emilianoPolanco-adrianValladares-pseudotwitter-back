const debug = require("debug")("twitter-app:errors:not-found");

const notFoundError = (req, res, next) => {
  debug("Request received for unexpected endpoint");
  try {
    res.status(404).json({ error: true, message: "endpoint not found" });
  } catch (error) {
    next(error);
  }
};

module.exports = notFoundError;
