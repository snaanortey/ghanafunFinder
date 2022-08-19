const express = require("express");

// Import mongoose model
const ActivityModel = require("../models/activity");

const app = express();

app.get("/random", async function (request, response) {
  const aggregates = await ActivityModel.aggregate([{ $sample: { size: 1 } }]);

  const activity = {
    description: aggregates[0].description,
    references: aggregates[0].references,
  };

  response.send(activity);
});

module.exports = app;
