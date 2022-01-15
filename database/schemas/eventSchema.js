const mongoose = require('mongoose');

// create a new schema
const { Schema } = mongoose;
const eventSchema = new Schema({
  title: String,
  date: Date,
  event: {
    info: String,
    begins: Date,
    endsOn: Date,
    allDay: Boolean,
  },
});

module.exports = eventSchema;
