'use strict';

angular.module('sortmeApp')
  .directive('ngCards', function() {
      return {
        restrict: 'A',
        templateUrl: 'app/templates/cards.html'
      }
    })
  .controller('MainCtrl', function ($scope, $http, $log) {
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
        // console.log($scope.data, 'data')
        $scope.things = $scope.data.cut(3);
        // console.log($scope.things, 'things')
    });



    $scope.theClasses = ["classone", "classtwo", "classthree"];

    $scope.classone = "top";
    $scope.classtwo = "middle";
    $scope.classthree = "bottom";




    $scope.changeClass = function(theClass, $event) {
        var sib;
        if ($event.target.classList[1]  === 'top' || $event.target.classList[0]  === 'top') {


            $scope.openModal();


        } else {
            for(var i= 0; i <= 2; i++) {
                if ($event.target.parentElement.parentElement.children[i].children[0].classList[1] === 'top') {
                    $event.target.parentElement.parentElement.children[i].children[0].className = $event.target.className;
                    $event.target.className ='ng-binding top';
                    break;
                }
            }

        }
    };
  // modal functions



  });
