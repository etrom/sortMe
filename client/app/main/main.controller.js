'use strict';

angular.module('sortmeApp')
  .directive('ngCards', function() {
      return {
        restrict: 'A',
        templateUrl: 'app/templates/cards.html'
      }
    })
  .controller('MainCtrl', function ($scope, $http) {
    $scope.things = [];

    Array.prototype.cut = function(cutSize) {
        var array = this;
        return [].concat.apply([],
            array.map(function(elem,i) {
                return i % cutSize ? [] : [array.slice(i ,i+cutSize)];
            })
        );
    }

    //gets the JSON data
    $http.get('/api/things').success(function(data) {
        $scope.data = data.data;
        console.log($scope.data, 'data')
        $scope.things = $scope.data.cut(3);
        console.log($scope.things, 'things')
    });

    $scope.openModal = function() {

    }
    $scope.theClasses = ["classone", "classtwo", "classthree"];
    console.log($scope.theClasses)
    $scope.classone = "top";
    $scope.classtwo = "middle";
    $scope.classthree = "bottom";

    $scope.changeClass = function($event){
        if ($event.currentTarget.className === 'top') {
            console.log('ing')
            console.log($event.currentTarget.className, $event.currentTarget.innerHTML)
        }
         if ($event.currentTarget.className === 'middle') {
            var temp = $scope.classtwo; //middle
            $scope.classtwo = $scope.classone; //top
            $scope.classone = temp; //middle
        }
         if ($event.currentTarget.className === 'bottom') {
            var temp = $scope.classthree; //bottom
            $scope.classthree = $scope.classone; //
            $scope.classone = temp;
        }

    };




  });
