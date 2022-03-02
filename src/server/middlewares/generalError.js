const debug = require("debug")("twitter-app:errors:general");

// eslint-disable-next-line no-unused-vars
const generalError = (err, req, res, next) => {
  debug("Request reached final error handler");
  const status = err.status ?? 500;
  const message = err.message ? err.message : "unexpected error";
  res.status(status).json({ error: true, message });
};

module.exports = generalError;
