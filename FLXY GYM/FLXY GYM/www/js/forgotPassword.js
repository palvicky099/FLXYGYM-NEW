app.controller('forgotPasswordCtrl', function($scope,  $ionicLoading, $state) {
	$scope.updatePassword=function(){
               $ionicLoading.show({
                 noBackdrop: false,
                template: '<p class="item flxy-button">Please wait</p>',
                 content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                duration: 3000,
                maxWidth: 200,
                showDelay: 0
               });
               $state.go('app.dashboard');
	}
})
