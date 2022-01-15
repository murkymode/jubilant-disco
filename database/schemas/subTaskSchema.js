const mongoose = require('mongoose');

// create a new schema
const { Schema } = mongoose;
const subTaskSchema = new Schema({
  title: String,
  info: String,
  due: Date,
  created: Date,
  complete: Boolean,
});

module.exports = subTaskSchema;
