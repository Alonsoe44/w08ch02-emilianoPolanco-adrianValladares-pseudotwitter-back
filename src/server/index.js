require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const generalError = require("./middlewares/generalError");
const notFoundError = require("./middlewares/notFoundError");
const tweetsRouter = require("./routers/tweetsRouter");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/tweets", tweetsRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = app;
