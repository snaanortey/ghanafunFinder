// Import express
const express = require("express");

//Import data
const data = require("./data.json");

// Import util.js file
const { isActivityValid } = require("./util");

// Create an instance of an express app
const boredAppServer = express();

// for parsing application/json; see link >> https://expressjs.com/en/api.html#req.body
// By default, the app server is not able to parse the json in the body of the http request
// Teach the web server how to parse request body of content type: application/json
boredAppServer.use(express.json());

const port = 3000;

// Listen for http get request on /random
boredAppServer.get("/random", function (request, response) {
  const randomIndex = Math.round(Math.random() * (data.length - 1));

  const randomActivity = data[randomIndex];

  response.send(randomActivity);
});

// Allow users to suggest new activities via http POST requests on /suggest
boredAppServer.post("/suggest", function (request, response) {
  const suggestedActivity = request.body;
  const isValid = isActivityValid(suggestedActivity);

  //Validate the input from the user and return bad request if the input is invalid
  if (isValid === false){
    response.status(400).send("Your suggestion is invalid. Please try again")
    return;
  }

  //Save the input data to the suggestions file (suggestions.json)


  response.send("Sugesstion resceived, let me go and sleep sucker!");

});

// starting the App to listen for http request on port 3000
boredAppServer.listen(port, function () {
  console.log("my app is working, sucker");
});
