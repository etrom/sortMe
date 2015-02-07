'use strict';

angular.module('sortmeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.things = [];

    $http.get('/api/things').success(function(data) {
      $scope.things = data.data;
    });

  });
