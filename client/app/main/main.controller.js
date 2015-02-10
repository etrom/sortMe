'use strict';

angular.module('sortmeApp')

  .directive('ngCards', function() {
      return {
        restrict: 'A',
        templateUrl: 'app/templates/cards.html'
      }
    })
  .controller('MainCtrl', function ($scope, $http, $log, $modal ) {
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

    // modal functions
    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'app/templates/myModal.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
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

    $scope.changeClass = function(theClass, $event) {
        var sib;
        if ($event.target.classList[1]  === 'top' || $event.target.classList[0]  === 'top') {

            $scope.open('sm');


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



  });

