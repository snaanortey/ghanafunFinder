// Import express
const express = require("express");
//Import data
const data = require("./data.json");
// Create an instance of an express app
const boredAppServer = express();
const port = 3000;

// Listen for http get request on /
boredAppServer.get("/random", function (request, response) {
  const randomIndex = Math.round(Math.random() * (data.length - 1));

  const randomActivity = data[randomIndex];

  response.send(randomActivity);
});

// starting the App to listen for http request on port 3000
boredAppServer.listen(port, function () {
  console.log("my app is working, sucker");
});
