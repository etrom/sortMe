'use strict';

angular.module('sortmeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.things = [];

    $http.get('/api/things').success(function(data) {
      $scope.things = data.data;
    });

    Array.prototype.cut = function(cutSize) {
    var array=this;
    return [].concat.apply([],
        array.map(function(elem,i) {
            return i % cutSize ? [] : [array.slice(i,i+cutSize)];
        })
    );
}


  });
