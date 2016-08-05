angular.module('starter.services', [])
.factory('dataService', function ($http, $rootScope) {
    var factory = [];
    var url = 'http://www.flxygym.com/home/api/';
    factory.login = function (model) {
        return $http.post(url + 'flxy_login.php?Mobile=' + model.Mobile + '&Password=' + model.Password);
    };
    factory.getCategory = function () {
        return $http.get(url + 'get_category.php');
    };
    factory.getCenter = function (model) {
        return $http.get(url + 'get_center.php?Cat_id=' + model);
    };
    factory.getDateCenter = function (model) {
        return $http.get(url + 'get_center.php?Cat_id=' + model.cat_id + '&date=' + model.date);
    };
    factory.getCenterDetails = function (model) {
        return $http.get(url + 'get_center_details.php?c_id=' + model);
    };
    factory.getAllGymCenter = function () {
        return $http.get(url + 'get_center.php');
    };
     factory.getGymMemberDetails = function () {
        return $http.get(url + 'get_gym_member_details.php');
     };
     factory.getAvailableGymCenter = function (model) {
         return $http.get(url + 'get_available_center.php?c_id='+model);
     };
    return factory;
});
