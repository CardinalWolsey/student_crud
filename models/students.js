var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  course: {type: String, default: 'Navajo Cultural Arts'},
  email: String
});

module.exports = mongoose.model('Student', studentSchema);
