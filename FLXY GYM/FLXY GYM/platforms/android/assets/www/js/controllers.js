var  app = angular.module('starter.controllers', [])

app.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicSideMenuDelegate) {

 $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})
