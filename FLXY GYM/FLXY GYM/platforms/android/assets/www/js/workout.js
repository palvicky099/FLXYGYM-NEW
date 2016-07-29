app.controller('workoutCtrl', function($scope, $state) {
$scope.$on('$ionicView.enter', function () {
	$scope.listArray = 
	[
	{
    "gymId":"1",
    "gymName":"Shiva Gym",
    "gymImg":"http://www.bodybuilding.com/images/2015/december2/how-to-deal-with-a-busy-gym-graphics-3.jpg",
    "gymTime":"10 am",
    "gymPrice":"1000 Rs",
    "gymDistance":"82828.92 kms",
     "gymAddress":"Dahisar West"
	},
	{
    "gymId":"2",
    "gymName":"Power Gym Borivali",
    "gymImg":"http://www.yourweightsolutions.com.au/wp-content/uploads/2014/08/Gym-perth.jpg",
    "gymTime":"11 am",
    "gymPrice":"500 Rs",
    "gymDistance":"8222.323 kms",
     "gymAddress":"Goregon West"

	},
	{
    "gymId":"3",
    "gymName":"ITC Gym Goregon",
    "gymImg":"http://www.active.com/Assets/Running/460/7-Cross-Training-Exercises460.jpg",
    "gymTime":"9 am",
    "gymPrice":"800 Rs",
    "gymDistance":"72373.0909 kms",
    "gymAddress":"Malad West"
	},
	{
    "gymId":"4",
    "gymName":"Royal GYM PVT LTD",
    "gymImg":"http://previews.123rf.com/images/andresr/andresr1008/andresr100800367/7508197-Group-of-people-doing-spinning-at-the-gym-and-smiling--Stock-Photo.jpg",
    "gymTime":"10 pm",
    "gymPrice":"1000 Rs",
    "gymDistance":"10000.00 kms",
    "gymAddress":"Borivali West"
	}
	,
	{
    "gymId":"5",
    "gymName":"5Star GYM PVT LTD",
    "gymImg":"https://i.ytimg.com/vi/MF_nOPEKE2g/maxresdefault.jpg",
    "gymTime":"10 pm",
    "gymPrice":"200 Rs",
    "gymDistance":"12323.323 kms",
    "gymAddress":"Kandivali West"
	}
	,
	{
    "gymId":"6",
    "gymName":"Golden GYM PVT LTD",
    "gymImg":"http://www.nrgfitness.ie/site/wp-content/uploads/gym-instructor-images-2.jpg",
    "gymTime":"10 pm",
    "gymPrice":"10000 Rs",
    "gymDistance":"22213.23 kms",
    "gymAddress":"Thane West"
	}
	]

    $scope.goDetail=function(l){
window.localStorage.setItem("itemDetails", JSON.stringify(l));
$state.go('detail');
    }
})
})
