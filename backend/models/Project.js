const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  image: String
});

module.exports = mongoose.model('Project', ProjectSchema);