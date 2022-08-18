const express = require("express");

// Import file system
const { writeFile } = require("node:fs/promises");

// Import mongoose model
const suggestionModel = require("../models/suggestion");

// Import data from suggestions.json so it can be added to arrayOfSuggestedIdeas
const arrayOfSuggestedIdeas = require("../suggestions.json");

const { isActivityValid } = require("../util");

const app = express();

// Allow users to suggest new activities via http POST requests on /suggest
app.post("/suggest", async function (request, response) {
  // The suggested activity is stored in the body of the http request
  // const { body } = request;
  // const suggestedActivity = body;

  // The suggested activity is stored in the mongodb database
  const suggestedActivity = new suggestionModel(request.body);

  // Calling the function to check that the object passed to the funtion is valid
  const isValid = isActivityValid(suggestedActivity);

  //Validate the input from the user and return bad request if the input is invalid
  if (!isValid) {
    response.status(400).send("Your suggestion is invalid. Please try again");
    return;
  }

  // Suggested activity is saved and passed to databased

  await suggestedActivity.save();

  // Add new suggested activity to an array
  // arrayOfSuggestedIdeas.push(suggestedActivity);

  // console.log(arrayOfSuggestedIdeas);

  // Save the array of suggested activities to the suggestions file (suggestions.json)
  // const data = JSON.stringify(arrayOfSuggestedIdeas, null, 2);

  // await writeFile("suggestions.json", data);

  response.send("Suggestion received, thank you!");
});

module.exports = app;
