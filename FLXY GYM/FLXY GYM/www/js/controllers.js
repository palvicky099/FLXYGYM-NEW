var  app = angular.module('starter.controllers', [])

app.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicSideMenuDelegate) {
    $scope.dashList = JSON.parse(window.localStorage.getItem("UserProfile"));
 $scope.toggleLeftSideMenu = function() {
     $ionicSideMenuDelegate.toggleLeft();
     $scope.dashList = JSON.parse(window.localStorage.getItem("UserProfile"));
  };
})
