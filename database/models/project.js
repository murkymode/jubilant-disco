const mongoose = require('mongoose');
const projectSchema = require('../schema');

module.exports = mongoose.model('Project', projectSchema);
