require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const generalError = require("./middlewares/generalError");
const notFoundError = require("./middlewares/notFoundError");

// const { notFoundError, internalSserverError } = require("./middlewares/error");

const app = express();

app.use(morgan("dev"));

app.use(notFoundError);
app.use(generalError);

module.exports = app;
