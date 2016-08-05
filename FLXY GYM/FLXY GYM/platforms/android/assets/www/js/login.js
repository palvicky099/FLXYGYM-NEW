app.controller('loginCtrl', function ($scope, $ionicHistory, dataService, $ionicLoading, $state, $ionicPopup) {
    var isIPad = ionic.Platform.isIPad();
    if (isIPad) {
        $scope.showheightTop = true;
    }
    else {
        $scope.showheightTop = false;
    }
    function doOnOrientationChange() {
        switch (window.orientation) {
            case -90:
            case 90:
                $scope.showheightTop = false;
                break;
            default:
                var isIPad = ionic.Platform.isIPad();
                if (isIPad) {
                    $scope.showheightTop = true;
                }
                break;
        }
    }
    $scope.goBack = function () {
        $ionicHistory.goBack();
    }
  
    $scope.btnLogin = function (model) {
        $ionicLoading.show({
            noBackdrop: false,
            template: '<p class="item"><ion-spinner icon="lines"/></p><p class="item flxy-button">Please Wait...</p>'
        });
        if (model == undefined) {
            $ionicLoading.show({
                template: '<i class="ion ion-android-notifications" style="font-size:40px; color:#FFD700"></i><div  style="color:white;  font-size: 15px;margin-top: 10px;">Please enter valid Email Address or Password</div>',
                content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                noBackdrop: true,
                duration: 3000,
                maxWidth: 200,
                showDelay: 0
            });
            $ionicLoading.hide();
            $scope.show = false;
        }
        else if (model.Mobile == '' || model.Mobile == undefined || model.Password == '' || model.Password == undefined) {
            $ionicLoading.show({
                template: '<i class="ion ion-android-notifications" style="font-size:40px; color:#FFD700"></i><div  style="color:white;  font-size: 15px;margin-top: 10px;">Please enter valid Email Address or Password</div>',
                content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                noBackdrop: false,
                duration: 3000,
                maxWidth: 200,
                showDelay: 0
            });
            $scope.show = false;
            $ionicLoading.hide();
        }
        else {
           
            if (navigator.connection.type == Connection.NONE) {
                var alertPopup = $ionicPopup.alert({
                    title: ' No internet connection',
                    template: '<div style="text-align:center; font-size:22px">No internet connectivity detected. Please reconnect and try again.</div>'
                });
                alertPopup.then(function (res) {
                });
            }
            else {
                $scope.show = true;
                dataService.login(model).then(function (data) {
                    $ionicLoading.hide();
                    if (data.data.message == "details found!") {
                        //    window.localStorage.setItem("UserRole", data.data.UserRole);
                        console.log(data);
                        $state.go('app.dashboard');
                    }
                    else {
                        console.log(data);
                        $ionicLoading.show({
                            template: '<i class="ion ion-close-circled" style="font-size:40px; color:red"></i><div  style="color:white;  font-size: 15px;margin-top: 10px;">Invalid Email Address or Password</div>',
                            content: 'Loading',
                            animation: 'fade-in',
                            showBackdrop: true,
                            noBackdrop: true,
                            duration: 3000,
                            maxWidth: 200,
                            showDelay: 0
                        });
                    }
                }, function (err) {
                    $ionicLoading.hide();
                    if (navigator.connection.type == Connection.NONE) {
                        $ionicLoading.show({ template: "Please check internet connection", noBackdrop: false, duration: 2000 });
                    } else {
                        //if ($scope.error.status == 0 || $scope.error.status == 500) {
                        //    var alertPopup = $ionicPopup.alert({
                        //        title: 'Maintenance break',
                        //        template: '<div style="text-align:center; font-size:22px">Sorry, the servers are under maintenance.Please try again in about 45 minutes.</div>'
                        //    });
                        //    alertPopup.then(function (res) {
                        //    });
                        //}
                        //else {
                            $ionicLoading.show({
                                template: '<i class="ion ion-close-circled" style="font-size:40px; color:red"></i><div  style="color:white;  font-size: 15px;margin-top: 10px;">Invalid Email Address or Password</div>',
                                content: 'Loading',
                                animation: 'fade-in',
                                showBackdrop: true,
                                noBackdrop: true,
                                duration: 3000,
                                maxWidth: 200,
                                showDelay: 0
                            });
                     //   }
                    }
                });
            }
        }
    }
    $scope.register = function () {
        $state.go('register')
    }
    $scope.forgotPassword = function () {
        $state.go('forgotPassword')
    }
})