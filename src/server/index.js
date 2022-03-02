require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

// const { notFoundError, internalSserverError } = require("./middlewares/error");

const app = express();

app.use(morgan("dev"));

module.exports = app;
