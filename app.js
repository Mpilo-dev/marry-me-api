const express = require("express");
const morgan = require("morgan");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.status(200).send("Hello Ndlovu");
});

module.exports = app;
