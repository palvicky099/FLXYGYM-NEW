app.controller('bookDateCtrl', function($scope, $ionicLoading, $cordovaDialogs,  $state) {
	  var DataArray = [];
    var myDate = new Date();
    var nextDay = new Date(myDate);
    for (var i = 0; i <= 6; i++)
    {
        nextDay.setDate(myDate.getDate() + i);
       var ds = nextDay.getFullYear() + '-' + ('0' + (nextDay.getMonth() + 1)).slice(-2) + '-' + ('0' + nextDay.getDate()).slice(-2);
var DataArrays = {
	"id":i,
	"dateName":ds
}
DataArray.push(DataArrays);
    }
    $scope.dateScope = DataArray;
     $scope.detailItem = JSON.parse(window.localStorage.getItem("itemDetails"));
	var msg ="This will do a booking for" + " "+$scope.detailItem.gymName + " " + "and center will contact you soon. Please go to My Booking to track the status";
	
    $scope.book=function(){
$cordovaDialogs.confirm(msg, 'Information', ['Cancel', 'Book'])
            .then(function (buttonIndex) {
            var btnIndex = buttonIndex;
            if(btnIndex == 1)
            {
            }
            if(btnIndex==2)
                {
             $cordovaDialogs.confirm('Booking Confirmed is 343 entry to seats table is 445', 'Information', ['OK'])
            .then(function (buttonIndex) {
             var btnIndex = buttonIndex;
             if(btnIndex == 1)
               {
               $state.go('app.dashboard');
               }
             });
            }
            });
            
    }
    $scope.addToCart=function(){
    	$ionicLoading.show({
                 noBackdrop: false,
                template: '<p class="item flxy-button">Item added to cart</p>',
                 content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                duration: 2000,
                maxWidth: 200,
                showDelay: 0
               });
    }
})
