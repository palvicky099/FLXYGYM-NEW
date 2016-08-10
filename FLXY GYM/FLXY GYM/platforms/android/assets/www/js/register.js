app.controller('registerCtrl', function ($scope, dataService) {
    $scope.register = function (user) {
        var data = JSON.stringify(user);
        dataService.register(data).then(function (result) {
            console.log("register");
            console.log(result);
        });
    }
})
