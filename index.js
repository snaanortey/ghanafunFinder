// Import express
const express = require("express");
// Create an instance of an express app
const boredAppServer = express();
const port = 3000;

// Creating an array of strings of activities that people can do
const boredActivities = [
  "play catan at home",
  "Go for terrific Tuesday",
  "Have sex",
  "Take a fucking walk",
  "ride a bicycle",
  "watch Netflix",
  "start a YouTube channel",
  "Take a stroll on Oxford street in Osu",
  "Go to the Labadi beach",
  "order dominos pizza and Netflix and Chill"
];

// Listen for http get request on /
boredAppServer.get("/:name/:age/:hair_colour", function (request, response) {
  const name = request.params.name;
  const age = request.params.age;
  const colour = request.params.hair_colour;

  const randomIndex = Math.round(Math.random() * (boredActivities.length - 1));

  const randomActivity = boredActivities[randomIndex];

  response.send(
    name +
      " is " +
      age +
      " years old and has " +
      colour +
      " hair! Sorry you're bored. It happens to everyone." +
      "We suggest you " +
      randomActivity
  );
});

// starting the App to listen for http request on port 3000
boredAppServer.listen(port, function () {
  console.log("my app is working, sucker");
});
