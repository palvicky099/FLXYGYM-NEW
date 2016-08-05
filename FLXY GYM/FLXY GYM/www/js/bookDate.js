app.controller('bookDateCtrl', function ($scope, $ionicLoading, $cordovaDialogs, $state, dataService) {
//$scope.$on('$ionicView.enter', function () {
    var DataArray = [];
    var myDate = new Date();
    for (var i = 0; i <= 6; i++)
    {
        var nextDay = new Date();
        nextDay.setDate(myDate.getDate() + i);
        var ds = nextDay.getFullYear() + '-' + ('0' + (nextDay.getMonth() + 1)).slice(-2) + '-' + ('0' + nextDay.getDate()).slice(-2);
        var DataArrays = {
            "id":i,
            "dateName":ds
        }
        DataArray.push(DataArrays);
    }
    //   $scope.dateScope = DataArray;
    $scope.detailItem = JSON.parse(window.localStorage.getItem("itemDetails"));
    var msg ="This will do a booking for" + " "+$scope.detailItem.gymName + " " + "and center will contact you soon. Please go to My Booking to track the status";
    var model = 5;
    $scope.dateScope = [];
    dataService.getAvailableGymCenter(model).then(function (result) {
        console.log(result.data.response)
        for(var i =0; i<result.data.response.length; i++)
        {
            var dateD = {
                "dateId": i,
                "Time": result.data.response[i].Time,
                "center_id": result.data.response[i].center_id,
                "center_name": result.data.response[i].center_name,
                "date":result.data.response[i].date,
                "remaining_seat": result.data.response[i].remaining_seat,
                "seat_per_day": result.data.response[i].seat_per_day,
            }
            $scope.dateScope.push(dateD);
        }
    })
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
   
    $scope.tagsarray = [];
    $scope.callMe = function (item, a) {
        var listToDelete = [item.dateId];
        if (a == true) {
            $scope.tagsarray.push(item)
        }
        else {
            if (a == undefined) {
                a = false;
            }
            for (var i = 0; i < $scope.tagsarray.length; i++) {
                var obj = $scope.tagsarray[i];

                if (listToDelete.indexOf(obj.dateId) !== -1) {
                    $scope.tagsarray.splice(i, 1);
                }
            }
        }
        console.log($scope.tagsarray);
    }
    $scope.goOrderDetails = function () {
        window.localStorage.setItem("selectedDate", JSON.stringify($scope.tagsarray));
        $state.go('orderDetail');
    }
})
