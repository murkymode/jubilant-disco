const mongoose = require('mongoose');

// create a new schema
const { Schema } = mongoose;
const projectSchema = new Schema({
  title: String,
  info: String,
  taskSections: [
    {
      title: String,
      tasks: [
        {
          title: String,
          info: String,
          created: Date.now,
          due: Date,
          complete: Boolean,
          subtasks: [
            {
              title: String,
              info: String,
              due: Date,
              created: Date.now,
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
