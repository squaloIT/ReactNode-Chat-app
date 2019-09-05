const mongoose = require("mongoose");
const options = require("../config/index");

// const connect = (url = options.dbUrl, opts = {}) => {
const connect = (url = "mongodb://localhost:27017/MERN-ChatApp", opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true });
};
module.exports = { connect };
