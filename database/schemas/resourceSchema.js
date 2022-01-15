const mongoose = require('mongoose');

// create a new schema
const { Schema } = mongoose;
const resourceSchema = new Schema({
  title: String,
  info: String,
  link: String,
});

module.exports = resourceSchema;
