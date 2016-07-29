app.controller('detailCtrl', function($scope, $cordovaDialogs, $state, $ionicLoading) {
	
    $scope.detailItem = JSON.parse(window.localStorage.getItem("itemDetails"));
	var msg ="This will do a booking for" + " "+$scope.detailItem.gymName + " " + "and center will contact you soon. Please go to My Booking to track the status";
	  $scope.reserve = function () {
            $state.go('bookDate');
               $ionicLoading.show({
                 noBackdrop: false,
                template: '<p class="item flxy-button">Please wait</p>',
                 content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                duration: 2000,
                maxWidth: 200,
                showDelay: 0
               });
        }
 $scope.rating = {};
  $scope.rating.rate = 3.5;
  $scope.rating.max = 5;
  $scope.call=function(){
    $cordovaDialogs.confirm('9930057558', ['Cancel', 'Call'])
            .then(function (buttonIndex) {
            var btnIndex = buttonIndex;
            if(btnIndex == 1)
            {
            }
            if(btnIndex==2)
                {
             $cordovaDialogs.confirm('No network available please try again later', 'Information', ['OK'])
            .then(function (buttonIndex) {
             var btnIndex = buttonIndex;
             if(btnIndex == 1)
               {
               }
             });
            }
            });
  }
})
