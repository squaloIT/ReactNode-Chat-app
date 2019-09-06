const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config");
const express = require("express");

const register = require("./utils/auth").register;
const { connect } = require("./utils/db");
// import { connect } from './utils/db'
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("SVAKI REQUEST");
  next();
});

app.post("/user/register", register);

const start = async () => {
  try {
    await connect(); //- konekcija sa bazom
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
