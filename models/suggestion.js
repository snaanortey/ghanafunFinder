const mongoose = require("mongoose");

const urlSchema = {
  type: String,
  required: false,
  match: /^(ftp|http|https):\/\/[^ "]+$/,
};
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
    maxLength: 250,
  },
  url: [urlSchema],
});

const suggestionModel = mongoose.model("suggestion", suggestionSchema);

module.exports = suggestionModel;
