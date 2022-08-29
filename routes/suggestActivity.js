const express = require("express");

// Import mongoose model
const suggestionModel = require("../models/suggestion");

const { isActivityValid } = require("../util");

const app = express();

// Every handler takes two parameters. The first is the request and the second is the response
async function suggestRouteHandler(request, response) {
  // Calling the function to check that the object passed to the funtion is valid
  const isValid = isActivityValid(request.body);

  //Validate the description property of the object and return bad request if the input is invalid
  if (!isValid) {
    response.status(400).send("Your suggestion is invalid. Please try again");
    return;
  }

  // create an instance of a MongoDB to be stroed to db
  const suggestedActivity = new suggestionModel(request.body);

  // Valid suggested activity is saved to the database
  try {
    await suggestedActivity.save();
    response.send("Suggestion received, thank you!");

    // Any other error is caught and generates an invalid error response
  } catch (error) {
    response.status(400).send("Your suggestion is invalid. Please try again");
    return;
  }
}

// When the app receives a POST HTTP request on the /suggest route, the suggestRouteHandler function will be called
app.post("/suggest", suggestRouteHandler);

module.exports = app;
