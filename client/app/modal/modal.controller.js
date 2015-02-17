'use strict';

angular.module('sortmeApp')
 .controller('ModalInstanceCtrl', function ($scope, $modalInstance, things) {

    $scope.item = things;


  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
