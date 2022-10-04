const express = require("express");

// Import mongoose model
const ActivityModel = require("../models/activity");

const app = express();

async function randomRouteHandler(request, response) {
  const aggregates = await ActivityModel.aggregate([{ $sample: { size: 1 } }]);

  // Because we requested a sample size of 1, so we extract our response as the first item of the aggregate response array
  const activity = {
    description: aggregates[0].description,
    references: aggregates[0].references,
  };

  response.send(activity);
}

// When the app receives a GET HTTP request on the /random route, the randomRouteHandler function will be called
app.get("/random", randomRouteHandler);

module.exports = app;
