const express = require("express");

// Import mongoose model
const suggestionModel = require("../models/suggestion");

const { isActivityValid } = require("../util");

const app = express();

// Allow users to suggest new activities via http POST requests on /suggest
app.post("/suggest", async function (request, response) {
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
});

module.exports = app;
