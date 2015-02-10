'use strict';

angular.module('sortmeApp')
 .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items, img) {
    console.log(img)

    $scope.img = img;
    $scope.text = items.split(/\r?\n/g);
    console.log($scope.text[0], 'inside modal ctl');
    $scope.paragraphs = ['one', 'two', 'three'];
    $scope.one;
    $scope.two;
    $scope.three;



      for(var i = 0 ; i < $scope.text.length; i++) {
        console.log($scope.paragraphs[i], 'pars')

            $scope[$scope.paragraphs[i]] = $scope.text[i];
            console.log($scope.text[i], 'text i')
      }

    console.log($scope.one, $scope.two, $scope.three, 'text here')




  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
