var express = require('express');
var app = express();
var mongoose = require('mongoose');
//add in the students router
//var studentsRouter = require(__dirname + '/routes/students_routes');

app.use(express.static(__dirname + '/build'));

app.listen(process.env.PORT || 3000, function() {
  console.log('server is up and listening on port 3000');
});



// var unicornsRouter = require(__dirname + '/routes/unicorns_routes');

// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/unicorn_dev');


// app.use('/api', unicornsRouter);
