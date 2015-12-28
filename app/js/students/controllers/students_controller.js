module.exports = function(app) {
  app.controller('StudentsController', ['$scope', '$http', function($scope, $http) {
    $scope.students = [];
    $scope.newStudent = null;

    $scope.getAll = function() {
      $http.get('/api/students')
        .then(function(res) {
          $scope.students = res.data;
        }, function(err) {
          console.log(err.data);
        });
    }

    $scope.create = function(student) {
      $http.post('/api/students', student)
        .then(function(res) {
          $scope.students.push(res.data);
          $scope.newStudent = null;
        }, function(err) {
          console.log(err.data);
        });
    };

    $scope.update = function(student) {
      student.editing = false;
      $http.put('/api/students/' + student._id, student)
        .then(function(res) {
          console.log('this student has a new identity (placed in student witness protection');
        }, function(err) {
          $scope.errors.push('could not get student: ' + student.name + ' to student trial');
          console.log(err.data);
        });
    };

    $scope.remove = function(student) {
      $scope.students.splice($scope.students.indexOf(student), 1);
      $http.delete('/api/students/' + student._id)
        .then(function(res) {
          console.log('oh no!  You murdered an Student');
        }, function(err) {
          console.log(err.data);
          $scope.getAll();
        });
    };
  }]);
};
