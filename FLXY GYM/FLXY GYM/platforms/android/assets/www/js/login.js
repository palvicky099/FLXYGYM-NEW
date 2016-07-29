app.controller('loginCtrl', function($scope, $state, $ionicLoading) {
	$scope.login=function(){
		setTimeout(function(){
   $state.go('app.dashboard');
		},2000)
		 $ionicLoading.show({
                 noBackdrop: false,
                template: '<p class="item"><ion-spinner icon="lines"/></p><p class="item flxy-button">Please Wait...</p>',
                 content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                duration: 3000,
                maxWidth: 200,
                showDelay: 0
        });
	} 
	$scope.register=function(){
		$state.go('register');
               $ionicLoading.show({
                 noBackdrop: false,
                template: '<p class="item"><ion-spinner icon="lines"/></p><p class="item flxy-button">Please Wait...</p>',
                 content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                duration: 3000,
                maxWidth: 200,
                showDelay: 0
        });
	}
	$scope.forgotPassword=function(){
		$state.go('forgotPassword');
               $ionicLoading.show({
                 noBackdrop: false,
                template: '<p class="item"><ion-spinner icon="lines"/></p><p class="item flxy-button">Please Wait...</p>',
                 content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                duration: 3000,
                maxWidth: 200,
                showDelay: 0
        });
	}
})
