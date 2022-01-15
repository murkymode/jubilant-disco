const mongoose = require('mongoose');

const columnSchema = require('./columnSchema');
const eventSchema = require('./eventSchema');
const resourceSchema = require('./resourceSchema');
const noteSchema = require('./noteSchema');

// create a new schema
const { Schema } = mongoose;
const projectSchema = new Schema({
  title: String,
  info: String,
  columns: [columnSchema],
  calendarEvents: [eventSchema],
  resources: [resourceSchema],
  notes: [noteSchema],
});

module.exports = projectSchema;
