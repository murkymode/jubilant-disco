const mongoose = require('mongoose');

const taskSchema = require('./taskSchema');

// create a new schema
const { Schema } = mongoose;
const columnSchema = new Schema({
  title: String,
  tasks: [taskSchema],
});

module.exports = columnSchema;
