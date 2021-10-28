const mongoose = require('mongoose');

// create a new schema
const { Schema } = mongoose;
const projectSchema = new Schema({
  item: String,
  info: String,
  selected: Boolean,
});

module.exports = projectSchema;
