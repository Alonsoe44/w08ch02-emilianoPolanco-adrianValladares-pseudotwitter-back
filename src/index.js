require("dotenv").config();
const debug = require("debug")("twitter-app:root");
const connecDataBase = require("./database/index");

const serverPort = process.env.PORT || 3004;
const loginCredendials = process.env.LOGIN_CREDENTIALS;
debug(loginCredendials + "43");
(async () => {
  try {
    // await connecDataBase(loginCredendials);
    // await startSrever(app, serverPort);
  } catch (error) {
    debug("The server is broken");
  }
})();
