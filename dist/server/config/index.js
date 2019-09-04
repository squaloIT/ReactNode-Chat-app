"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var env = process.env.NODE_ENV || "development";
var baseConfig = {
  env: env,
  isDev: env === "development",
  isTest: env === "testing",
  port: 3030,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: "100d"
  }
};
var envConfig = {};

switch (env) {
  case "dev":
  case "development":
    envConfig = require("./dev").config;
    break;

  case "test":
  case "testing":
    envConfig = require("./testing").config;
    break;

  default:
    envConfig = require("./dev").config;
}

var _default = (0, _lodash.merge)(baseConfig, envConfig);

exports.default = _default;