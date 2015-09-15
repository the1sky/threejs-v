angular.module('starter.controllers', [])
  .controller('TestCtrl', function ($scope) {
    $scope.canvasWidth = 400;
    $scope.canvasHeight = 400;
    $scope.dofillcontainer = true;
    $scope.scale = 1;
    $scope.materialType = 'lambert';
  }
)
