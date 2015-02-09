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
        debugger;
        if ($event.target.classList[1]  === 'top' || $event.target.classList[0]  === 'top') {
        }
        //sitches middle
         if ($event.target.classList[1]=== 'middle') {
            var sib = $event.target.parentElement.parentElement.children[0].children[0].className;
            if(sib === 'middle') {
                $event.target.parentElement.parentElement.children[1].children[0].className ='top';
                $event.target.className = 'middle';
            } else {
                    $event.target.parentElement.parentElement.children[0].children[0].className = 'middle';
                    $event.target.className = "top"
            }

        }
        //switches middle
        if ($event.target.classList[0]=== 'middle') {
            var sib = $event.target.parentElement.parentElement.children[1].children[0].className;
                            console.log(sib,'sibling')
            if (sib === 'middle') {
               $event.target.parentElement.parentElement.children[0].children[0].className ='middle';
                $event.target.className = 'top'
                } else {
                    $event.target.parentElement.parentElement.children[1].children[0].className = 'middle';
                    $event.target.className = "top"
                }

        }
        //switches bottom
        if ($event.target.classList[1]=== 'bottom') {
            var sib = $event.target.parentElement.parentElement.children[0].children[0].className;
            if(sib === 'bottom') {
                $event.target.parentElement.parentElement.children[2].children[0].className ='top';
                $event.target.className = 'bottom';
            } else {
                    $event.target.parentElement.parentElement.children[0].children[0].className = 'bottom';
                    $event.target.className = "top"
            }

        }
        if ($event.target.classList[0]=== 'bottom') {
            var sib = $event.target.parentElement.parentElement.children[2].children[0].className;
                            console.log(sib,'sibling')
            if (sib === 'bottom') {
               $event.target.parentElement.parentElement.children[0].children[0].className ='bottom';
                $event.target.className = 'top'
                } else {
                    $event.target.parentElement.parentElement.children[2].children[0].className = 'bottom';
                    $event.target.className = "top"
                }

        }


        //  if ($event.target.classList[1] === 'bottom'){



        //  } || $event.target.classList[0]=== 'bottom') {
        //    $event.target.parentElement.parentElement.children[0].children[0].className = 'bottom';
        //     $event.target.className = "top"
        // }

    };




  });
