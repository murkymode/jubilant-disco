const mongoose = require('mongoose');

// create a new schema
const { Schema } = mongoose;
const projectSchema = new Schema({
  title: String,
  info: String,
  taskSection: [
    {
      title: String,
      tasks: [
        {
          title: String,
          info: String,
          complete: Boolean,
          subtasks: [
            {
              title: String,
              info: String,
              complete: Boolean,
            },
          ],
        },
      ],
    },
  ],
  calendarEvents: [
    {
      title: String,
      date: Date,
      event: {
        info: String,
        endsOn: Date,
        allDay: Boolean,
      },
    },
  ],
  resources: [
    {
      title: String,
      info: String,
      link: String,
    },
  ],
  notes: [
    {
      title: String,
      info: String,
    },
  ],
});

module.exports = projectSchema;
