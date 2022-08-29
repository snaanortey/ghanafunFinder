const express = require("express");

// Imported path which is a node js module for managing file and directory path
const path = require("path");

const app = express();

function indexRootHandler(req, res) {
  const pathToTheRootFile = path.join(__dirname, "../index.html");

  res.sendFile(pathToTheRootFile);
}

// When the app receives a GET HTTP request on the / route, the indexRootHandler function will be called
app.get("/", indexRootHandler);

module.exports = app;
