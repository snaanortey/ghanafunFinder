const mongoose = require("mongoose");

// Child schema of parent url array
const urlSchema = new mongoose.Schema({
  type: String,
  required: false,
  validate(value) {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(value);
  },
});

/* 
Mongoose schema definition. See - https://mongoosejs.com/docs/guide.html#definition

Defines the suggested activity schema which consist of description and url. 

Description: The description value is of type string, is required. 

URL: The url value is an array of type string(s) and is not required, but when included should be a valid url 

*/
const suggestionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.length > 250) {
        throw new Error(
          "Description is too long. Characters should be less than 250."
        );
      }
    },
  },
  url: [urlSchema],
});

const suggestionModel = mongoose.model("suggestion", suggestionSchema);

module.exports = suggestionModel;
