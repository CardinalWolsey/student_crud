var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  name: String,
  species: {type: String, default: 'awesome'},
  color: {type: String, default: 'rainbow'}
});

module.exports = mongoose.model('Student', studentSchema);
