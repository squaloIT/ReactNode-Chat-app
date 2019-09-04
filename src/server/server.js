import express from "express";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";

export const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

export const start = async () => {
  try {
    // await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
