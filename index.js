// Import express
const express = require("express");

// Import file system
const { writeFile } = require("node:fs/promises");

//Import data from JSON to be read in js
const data = require("./data.json");

// Import data from suggestions.json so it can be added to arrayOfSuggestedIdeas
const arrayOfSuggestedIdeas = require("./suggestions.json");

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
boredAppServer.post("/suggest", async function (request, response) {

  // The suggested activity is stored in the body of the http request
  const suggestedActivity = request.body;

  // Calling the function to check that the object passed to the funtion is valid
  const isValid = isActivityValid(suggestedActivity);

  //Validate the input from the user and return bad request if the input is invalid
  if (isValid === false) {
    response.status(400).send("Your suggestion is invalid. Please try again");
    return;
  }
 
  // Add new suggested activity to an array
  arrayOfSuggestedIdeas.push(suggestedActivity);

  console.log(arrayOfSuggestedIdeas);

  //Save the array of suggested activities to the suggestions file (suggestions.json)
  const data = JSON.stringify(arrayOfSuggestedIdeas, null, 2);
  const promise = writeFile("suggestions.json", data);
  await promise;

  
  response.send("Suggestion received, let me go and sleep sucker!");
});



// starting the App to listen for http request on port 3000
boredAppServer.listen(port, function () {
  console.log("my app is working, sucker");
});
