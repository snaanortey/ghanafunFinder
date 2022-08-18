const express = require("express");

//Import data from JSON to be read in JavaScript
const data = require("../data.json");

const app = express();

app.get("/random", function (request, response) {
  const randomIndex = Math.round(Math.random() * (data.length - 1));

  const randomActivity = data[randomIndex];

  response.send(randomActivity);
});

module.exports = app;
