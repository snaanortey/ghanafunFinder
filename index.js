// Import express
const express = require("express");

// Import random activity route
const randomActivity = require("./routes/randomActivity");

// Import suggested activity route
const suggestActivity = require("./routes/suggestActivity");

const port = 3000;

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
server.listen(port, function () {
  console.log(`app now running on localhost ${port}`);
});
