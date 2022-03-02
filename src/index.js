require("dotenv").config();
const debug = require("debug")("twitter-app:root");
const connecDataBase = require("./database");
const app = require("./server");
const startServer = require("./server/startServer");

const serverPort = process.env.PORT || 3004;
const loginCredentials = process.env.LOGIN_CREDENTIALS;

(async () => {
  try {
    await connecDataBase(loginCredentials);
    await startServer(app, serverPort);
  } catch (error) {
    debug("The server is broken");
  }
})();
