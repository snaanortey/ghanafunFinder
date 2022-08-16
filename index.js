// Import express
const express = require("express");
// Create an instance of an express app
const boredAppServer = express();
const port = 3000;

// Creating an array of strings of activities that people can do
const boredActivities = [
  {
    description: "Play catan at home",
    referenceLink: [
      {
        text: "Click here to know more about catan",
        url: "https://www.dicebreaker.com/games/catan-1/how-to/how-to-play-catan-board-game",
      },
      {
        text: "Click here to buy catan",
        url: "",
      },
    ],
  },
  {
    description: "Got for terrific Tuesday",
    referenceLink: [
      {
        text: "What's terrific Tuesday all about?",
        url: "",
      },
    ],
  },
  {
    description:
      "Take a walk in your neighbourhood. You could buy some yam chips and khebab while at it!",
    referenceLink: [],
  },
  {
    description:
      "Ride a bicycle around your neighbourhood: You should be staying at East Legon, Cantonments, Airport and the likes 😁",
    referenceLink: [],
  },
  {
    description: "Watch Netflix and chill ,or no chill 😉",
    referenceLink: [],
  },
  {
    description: "Start a YouTube channel; On a topic you fancy!",
    referenceLink: [
      {
        text: "How to start a YouTube channel",
        url: "",
      },
    ],
  },
  {
    description: "Sunny day? Go to the Labadi beach",
    referenceLink: [
      {
        text: "All about the Labadi beach in Accra",
        url: "",
      },
    ],
  },
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
