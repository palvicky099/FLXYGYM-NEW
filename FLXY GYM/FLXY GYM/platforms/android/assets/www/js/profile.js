app.controller('profileCtrl', function ($scope, $ionicLoading, dataService) {
    $scope.dashList = JSON.parse(window.localStorage.getItem("UserProfile"));
    $scope.dates = new Date($scope.dashList[0].dob);
    $scope.updateProfile = function (dashList) {
        window.localStorage.setItem("UserProfile", JSON.stringify(dashList));
        $ionicLoading.show({
            noBackdrop: false,
            template: '<p class="item"><ion-spinner icon="lines"/></p><p class="item flxy-button">Plase wait...</p>'
        });
        dataService.updateProfile(dashList).then(function (result) {
            $ionicLoading.show({
                noBackdrop: false,
                template: '<p class="item flxy-button">Profile Updated Suceessfully</p>',
                content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                duration: 3000,
                maxWidth: 200,
                showDelay: 0
            });
        }, function (err) {
            $ionicLoading.hide();
            $scope.dashList = JSON.parse(window.localStorage.getItem("Category"));
        });
     }
})
