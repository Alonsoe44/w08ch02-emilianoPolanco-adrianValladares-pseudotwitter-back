const debug = require("debug")("twitter-app:database");
const { default: mongoose } = require("mongoose");

const connectDataBase = (connectionLogin) =>
  new Promise((resolve, reject) => {
    mongoose.set("debug", true);
    mongoose.connect(connectionLogin, (error) => {
      if (error) {
        reject(error);
        return;
      }
      debug("Database connected");
      resolve();
    });
  });

module.export = connectDataBase;
