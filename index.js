// Loads config from .env file into process.env
require("dotenv").config();

// Import express
const express = require("express");

const mongoose = require("mongoose");

// Import random activity route
const randomActivity = require("./routes/randomActivity");

// Import suggest activity route
const suggestActivity = require("./routes/suggestActivity");

// Connects the API server to MongoDB Atlas
const { CONNECTIONS_STRING, PORT = 3000 } = process.env;

mongoose.connect(
  CONNECTIONS_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function () {
    console.log("Successfully connected to database.");
  }
);

// Create an instance of an express app
const server = express();

// for parsing application/json; see link >> https://expressjs.com/en/api.html#req.body
// By default, the app server is not able to parse the json in the body of the http request
// Teach the web server how to parse request body of content type: application/json
server.use(express.json());

// Register the random activity route to be used here
server.use(randomActivity);

// Register the random activity route to be used here
server.use(suggestActivity);

// starting the App to listen for http request on port 3000
server.listen(PORT, function () {
  console.log(`app now running on localhost ${PORT}`);
});
