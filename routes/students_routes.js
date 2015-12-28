var express = require('express');
var bodyParser = require('body-parser');
var Student = require(__dirname + '/../models/students');
var handleError = require(__dirname + '/../lib/handle_server_error')

var studentsRouter = module.exports = exports = express.Router();

studentsRouter.get('/students', function(req, res) {
  Student.find({}, function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

studentsRouter.post('/students', bodyParser.json(), function(req, res) {
  var newStudent = new Student(req.body);
  newStudent.save(function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

studentsRouter.put('/students/:id', bodyParser.json(), function(req, res) {
  var studentData = req.body;
  delete studentData._id;
  Student.update({_id: req.params.id}, studentData, function(err, data) {
    if (err) return handleError(err, res);

    res.json({msg: 'success!'})
  });
});

studentsRouter.delete('/students/:id', function(req, res) {
  Student.remove({_id: req.params.id}, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'success!'});
  });
});
