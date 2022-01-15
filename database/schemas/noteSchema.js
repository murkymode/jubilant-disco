const mongoose = require('mongoose');

// create a new schema
const { Schema } = mongoose;
const noteSchema = new Schema({
  title: String,
  info: String,
});

module.exports = noteSchema;
