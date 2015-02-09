'use strict';

angular.module('sortmeApp')
  .directive('ngCards', function() {
      return {
        restrict: 'A',
        templateUrl: "'../templates/cards.html'"
      }
    })
  .controller('MainCtrl', function ($scope, $http) {
    $scope.things = [];

    //gets the JSON data
    $http.get('/api/things').success(function(data) {
      $scope.things = data.data;
    });

    $scope.openModal = function() {

    }

    $scope.classone = "top";
    $scope.classtwo="middle";
    $scope.classthree="bottom";

   //  $scope.changeClass = function(stuff, $event){
   // //      if ($scope.class === "top") {
   //           //             $scope.class = "bottom";
   //               //     } else if ($scope.class === "bottom"){
   //                //         $scope.class = "top";
   //                 //   }
   // console.log($event.target);
   //      if (stuff === 'one'){
   //          console.log("hey");
   //          var temp = $scope.classtwo
   //          $scope.classtwo = $scope.classone;
   //          // middle is now top
   //          $scope.classone = temp;
   //          // top is now middle
   //   }
   //          //else if ($scope.classonetwo === "top"){
   //    //       $scope.classonetwo = "middle";
   //      //    $scope.classone = "top";
   //      //}
   //      if (stuff === 'two') {
   //          var temp = $scope.classthree;
   //          $scope.classthree = $scope.classone;
   //          $scope.classone = temp;
   //      }
   //          //else if ($scope.classthree === "top"){
   //       //    $scope.classthree = "bottom";
   //         //  $scope.classone="top";
   //    //  }
   //  };


    //cut an array and return
    // Array.prototype.cut = function(cutSize) {
    //     var array = this;
    //     return [].concat.apply([],
    //         array.map(function(elem,i) {
    //             return i % cutSize ? [] : [array.slice(i ,i+cutSize)];
    //         })
    //     );
    // }


  });
