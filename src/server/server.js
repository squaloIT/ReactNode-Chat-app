const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const config = require("./config");
const express = require("express");

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

const start = async () => {
  try {
    // await connect() - konekcija sa bazom
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
