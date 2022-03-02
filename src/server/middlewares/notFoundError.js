const debug = require("debug")("twitter-app:errors:not-found");

const notFoundError = (req, res, next) => {
  debug("Request received for unexpected endpoint");
};

module.exports = notFoundError;
