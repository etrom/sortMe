'use strict';

angular.module('sortmeApp')
 .controller('ModalInstanceCtrl', function ($scope, $modalInstance, things) {

    $scope.item = things;
    console.log($scope.item, 'item')


  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
