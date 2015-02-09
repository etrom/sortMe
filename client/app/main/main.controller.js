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
        // console.log($scope.data, 'data')
        $scope.things = $scope.data.cut(3);
        // console.log($scope.things, 'things')
    });

    $scope.openModal = function() {

    }
    $scope.theClasses = ["classone", "classtwo", "classthree"];

    $scope.classone = "top";
    $scope.classtwo = "middle";
    $scope.classthree = "bottom";
    $scope.click = false;
    $scope.clicked= function(){
        $scope.click = true;
    }

    $scope.changeClass = function($event){
        if ($event.target.classList[1] === 'top') {
            // console.log($event.target.className, $event.target.innerHTML)
        }
         if ($event.target.classList[1] === 'middle' && $scope.click) {
            console.log($scope.click)
            console.log(this.getElementByClass("middle"))
            ///var switched = this.getElementByClass('top') ;
            this.getElementByClass("middle").className = "top";
            console.log($event.target.getElementByClass('top'), 'top')
            $event.target.classList[1] = 'top';
            $scope.click = false;
            // var temp = $scope.classtwo; //middle
            // $scope.classtwo = $scope.classone; //top
            // $scope.classone = temp; //middle
        }
         if ($event.target.classList[1] === 'bottom') {
            var temp = $scope.classthree; //bottom
            $scope.classthree = $scope.classone; //
            $scope.classone = temp;
        }

    };




  });
