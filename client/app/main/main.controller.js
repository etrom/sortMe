'use strict';

angular.module('sortmeApp')

  .directive('ngCards', function() {
      return {
        restrict: 'A',
        templateUrl: 'app/templates/cards.html'
      }
    })
  .directive('ngShapes', function() {
      return {
        restrict: 'A',
        templateUrl: 'app/templates/shapes.html'
      }
    })
  .controller('MainCtrl', function ($scope, $filter, $http, $log, $modal, $timeout ) {
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
        $scope.things = $scope.data.cut(3);


    });

   $scope.reCut = function(string){
      $scope.place = $filter('filter')($scope.data, string)
      $scope.things = $scope.place.cut(3)
    }
    $scope.model = function(string){
      $scope.searchText = string;
      $scope.reCut(string);
    }

    $scope.promoteToTop = function(stack, idx) {
        var vals = stack.splice(idx, 1);
        if (idx === 2) {
            var temp = stack[0]
             stack[0] = vals[0];
            stack[2] = temp;
        } else {
            stack.splice(0, 0, vals[0]);
        }
    }

    // modal functions
    $scope.open = function (size, item) {
    var modalInstance = $modal.open({
      templateUrl: 'app/templates/myModal.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        things: function () {
          return item;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
    };
    //end modal

  });

