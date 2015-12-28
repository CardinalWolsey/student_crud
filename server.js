var express = require('express');
var app = express();
var mongoose = require('mongoose');
var studentsRouter = require(__dirname + '/routes/students_routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/student');

app.use('/api', studentsRouter);

app.use(express.static(__dirname + '/build'));

app.listen(process.env.PORT || 3000, function() {
  console.log('server is up and listening on port 3000');
});




