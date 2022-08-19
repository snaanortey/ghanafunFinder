// Import mongoose library
const mongoose = require("mongoose");

/* 
Mongoose schema definition. See - https://mongoosejs.com/docs/guide.html#definition

Defines the Activity.reference schema which consist of text and url. 

Text: The text value is of type string, is required when the url value has characters of one or more. 

URL: The url value is of type string and is not required, but when included should be a valid url 

*/
const referenceSchema = new mongoose.Schema({
  text: {
    type: String,
    required: function () {
      return this.url.length > 0;
    },
  },
  url: {
    type: String,
    required: false,
    match: /^(ftp|http|https):\/\/[^ "]+$/,
  },
});

/* 
Defines activity schema to consist of a description value that is of type string, it will be required, 

trim any whitespace and will have a default of less than 250 characters. 
*/
const activitySchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
    maxLength: 250,
  },
  references: [referenceSchema],
});

/* Convert activity schema into a workable mongoose model. See >> https://mongoosejs.com/docs/guide.html#models

Models are responsible for creating and reading documents from the underlying MongoDB database */
const activityModel = mongoose.model("Activity", activitySchema);

module.exports = activityModel;
