'use strict';

angular.module('sortmeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(data) {
      $scope.data = data;
      console.log($scope.data.data[0].tags)
    });

  });
