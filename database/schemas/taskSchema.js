const mongoose = require('mongoose');

const subTaskSchema = require('./subTaskSchema');

// create a new schema
const { Schema } = mongoose;
const taskSchema = new Schema({
  title: String,
  info: String,
  created: Date,
  due: Date,
  complete: Boolean,
  subtasks: [subTaskSchema],
});

module.exports = taskSchema;
