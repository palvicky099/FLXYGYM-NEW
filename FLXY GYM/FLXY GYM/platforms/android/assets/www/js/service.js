angular.module('starter.services', [])
.factory('dataService', function ($http, $rootScope) {
    var factory = [];
    var url = 'http://www.flxygym.com/home/api/';
   /* factory.login = function (model) {
        return $http.post(url + 'Login', model);
    };*/
    factory.getCategory = function () {
        return $http.get(url + 'get_category.php');
    };
    factory.getCenter = function () {
        return $http.get(url + 'get_center.php');
    };
     factory.getGymMemberDetails = function () {
        return $http.get(url + 'get_gym_member_details.php');
    };
    return factory;
});
