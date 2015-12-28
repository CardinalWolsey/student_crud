require('angular/angular');
var angular = window.angular;

var studentApp = angular.module('StudentApp', []);
require('./students/students')(studentApp);
