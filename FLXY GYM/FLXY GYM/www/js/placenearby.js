app.controller('placenearbyCtrl', function($scope, $state) {
  $scope.$on('$ionicView.enter', function () {
  $scope.options = ['Load', 'Sync', 'Settings'];
	
    $scope.listArray = 
    [
    {
    "gymId":"1",
    "gymName":"Shiva Gym",
    "gymImg":"http://www.bodybuilding.com/images/2015/december2/how-to-deal-with-a-busy-gym-graphics-3.jpg",
    "gymTime":"10 am to 11pm",
    "gymPrice":"1000 Rs",
    "gymDistance":"82828.92 kms",
     "gymAddress":"Dahisar West",
    "gymRating":3.5,
    "gymCategory":"Swim"
    },
    {
    "gymId":"2",
    "gymName":"Power Gym",
    "gymImg":"http://www.yourweightsolutions.com.au/wp-content/uploads/2014/08/Gym-perth.jpg",
    "gymTime":"11 am to 2pm",
    "gymPrice":"500 Rs",
    "gymDistance":"8222.323 kms",
     "gymAddress":"Goregon West",
    "gymRating":4.5,
    "gymCategory":"Cardio"

    },
    {
    "gymId":"3",
    "gymName":"ITC Gym",
    "gymImg":"http://www.active.com/Assets/Running/460/7-Cross-Training-Exercises460.jpg",
    "gymTime":"9 am to 12pm",
    "gymPrice":"800 Rs",
    "gymDistance":"72373.0909 kms",
    "gymAddress":"Malad West",
    "gymRating":3.5,
    "gymCategory":"Sports"
    },
    {
    "gymId":"4",
    "gymName":"Royal GYM",
    "gymImg":"http://previews.123rf.com/images/andresr/andresr1008/andresr100800367/7508197-Group-of-people-doing-spinning-at-the-gym-and-smiling--Stock-Photo.jpg",
    "gymTime":"10 pm to 12pm",
    "gymPrice":"1000 Rs",
    "gymDistance":"10000.00 kms",
    "gymAddress":"Borivali West",
    "gymRating":2.5,
    "gymCategory":"Dance"
    }
    ,
    {
    "gymId":"5",
    "gymName":"5Star GYM",
    "gymImg":"https://i.ytimg.com/vi/MF_nOPEKE2g/maxresdefault.jpg",
    "gymTime":"10 pm to 1pm",
    "gymPrice":"200 Rs",
    "gymDistance":"12323.323 kms",
    "gymAddress":"Kandivali West",
    "gymRating":3.5,
    "gymCategory":"Pilates"
    }
    ,
    {
    "gymId":"6",
    "gymName":"Golden GYM",
    "gymImg":"http://www.nrgfitness.ie/site/wp-content/uploads/gym-instructor-images-2.jpg",
    "gymTime":"10 pm to 3pm",
    "gymPrice":"10000 Rs",
    "gymDistance":"22213.23 kms",
    "gymAddress":"Thane West",
    "gymRating":3,
    "gymCategory":"Swim"
    },
    {
    "gymId":"1",
    "gymName":"Shiva Gym",
    "gymImg":"http://www.bodybuilding.com/images/2015/december2/how-to-deal-with-a-busy-gym-graphics-3.jpg",
    "gymTime":"10 am to 11pm",
    "gymPrice":"1000 Rs",
    "gymDistance":"82828.92 kms",
     "gymAddress":"Dahisar West",
    "gymRating":3.5,
    "gymCategory":"Swim"
    },
    {
    "gymId":"2",
    "gymName":"Power Gym",
    "gymImg":"http://www.yourweightsolutions.com.au/wp-content/uploads/2014/08/Gym-perth.jpg",
    "gymTime":"11 am to 2pm",
    "gymPrice":"500 Rs",
    "gymDistance":"8222.323 kms",
     "gymAddress":"Goregon West",
    "gymRating":4.5,
    "gymCategory":"Cardio"

    },
    {
    "gymId":"3",
    "gymName":"ITC Gym",
    "gymImg":"http://www.active.com/Assets/Running/460/7-Cross-Training-Exercises460.jpg",
    "gymTime":"9 am to 12pm",
    "gymPrice":"800 Rs",
    "gymDistance":"72373.0909 kms",
    "gymAddress":"Malad West",
    "gymRating":3.5,
    "gymCategory":"Sports"
    },
    {
    "gymId":"4",
    "gymName":"Royal GYM",
    "gymImg":"http://previews.123rf.com/images/andresr/andresr1008/andresr100800367/7508197-Group-of-people-doing-spinning-at-the-gym-and-smiling--Stock-Photo.jpg",
    "gymTime":"10 pm to 12pm",
    "gymPrice":"1000 Rs",
    "gymDistance":"10000.00 kms",
    "gymAddress":"Borivali West",
    "gymRating":2.5,
    "gymCategory":"Dance"
    }
    ,
    {
    "gymId":"5",
    "gymName":"5Star GYM",
    "gymImg":"https://i.ytimg.com/vi/MF_nOPEKE2g/maxresdefault.jpg",
    "gymTime":"10 pm to 1pm",
    "gymPrice":"200 Rs",
    "gymDistance":"12323.323 kms",
    "gymAddress":"Kandivali West",
    "gymRating":3.5,
    "gymCategory":"Pilates"
    }
    ,
    {
    "gymId":"6",
    "gymName":"Golden GYM",
    "gymImg":"http://www.nrgfitness.ie/site/wp-content/uploads/gym-instructor-images-2.jpg",
    "gymTime":"10 pm to 3pm",
    "gymPrice":"10000 Rs",
    "gymDistance":"22213.23 kms",
    "gymAddress":"Thane West",
    "gymRating":3,
    "gymCategory":"Swim"
    },
    {
    "gymId":"1",
    "gymName":"Shiva Gym",
    "gymImg":"http://www.bodybuilding.com/images/2015/december2/how-to-deal-with-a-busy-gym-graphics-3.jpg",
    "gymTime":"10 am to 11pm",
    "gymPrice":"1000 Rs",
    "gymDistance":"82828.92 kms",
     "gymAddress":"Dahisar West",
    "gymRating":3.5,
    "gymCategory":"Swim"
    },
    {
    "gymId":"2",
    "gymName":"Power Gym",
    "gymImg":"http://www.yourweightsolutions.com.au/wp-content/uploads/2014/08/Gym-perth.jpg",
    "gymTime":"11 am to 2pm",
    "gymPrice":"500 Rs",
    "gymDistance":"8222.323 kms",
     "gymAddress":"Goregon West",
    "gymRating":4.5,
    "gymCategory":"Cardio"

    },
    {
    "gymId":"3",
    "gymName":"ITC Gym",
    "gymImg":"http://www.crabwallmanorhotelandspa.com/getattachment/The-Spa/Fitness/Slideshow/slide-1/gym-sit-ups.jpg.aspx?width=5616&height=3744&ext=.jpg",
    "gymTime":"9 am to 12pm",
    "gymPrice":"800 Rs",
    "gymDistance":"72373.0909 kms",
    "gymAddress":"Malad West",
    "gymRating":3.5,
    "gymCategory":"Sports"
    },
    {
    "gymId":"4",
    "gymName":"Royal GYM",
    "gymImg":"http://previews.123rf.com/images/andresr/andresr1008/andresr100800367/7508197-Group-of-people-doing-spinning-at-the-gym-and-smiling--Stock-Photo.jpg",
    "gymTime":"10 pm to 12pm",
    "gymPrice":"1000 Rs",
    "gymDistance":"10000.00 kms",
    "gymAddress":"Borivali West",
    "gymRating":2.5,
    "gymCategory":"Dance"
    }
    ,
    {
    "gymId":"5",
    "gymName":"5Star GYM",
    "gymImg":"https://i.ytimg.com/vi/MF_nOPEKE2g/maxresdefault.jpg",
    "gymTime":"10 pm to 1pm",
    "gymPrice":"200 Rs",
    "gymDistance":"12323.323 kms",
    "gymAddress":"Kandivali West",
    "gymRating":3.5,
    "gymCategory":"Pilates"
    }
    ,
    {
    "gymId":"6",
    "gymName":"Golden GYM",
    "gymImg":"http://www.nrgfitness.ie/site/wp-content/uploads/gym-instructor-images-2.jpg",
    "gymTime":"10 pm to 3pm",
    "gymPrice":"10000 Rs",
    "gymDistance":"22213.23 kms",
    "gymAddress":"Thane West",
    "gymRating":3,
    "gymCategory":"Swim"
    },
    {
    "gymId":"1",
    "gymName":"Shiva Gym",
    "gymImg":"http://www.bodybuilding.com/images/2015/december2/how-to-deal-with-a-busy-gym-graphics-3.jpg",
    "gymTime":"10 am to 11pm",
    "gymPrice":"1000 Rs",
    "gymDistance":"82828.92 kms",
     "gymAddress":"Dahisar West",
    "gymRating":3.5,
    "gymCategory":"Swim"
    },
    {
    "gymId":"2",
    "gymName":"Power Gym",
    "gymImg":"http://www.yourweightsolutions.com.au/wp-content/uploads/2014/08/Gym-perth.jpg",
    "gymTime":"11 am to 2pm",
    "gymPrice":"500 Rs",
    "gymDistance":"8222.323 kms",
     "gymAddress":"Goregon West",
    "gymRating":4.5,
    "gymCategory":"Cardio"

    },
    {
    "gymId":"3",
    "gymName":"ITC Gym",
    "gymImg":"http://www.crabwallmanorhotelandspa.com/getattachment/The-Spa/Fitness/Slideshow/slide-1/gym-sit-ups.jpg.aspx?width=5616&height=3744&ext=.jpg",
    "gymTime":"9 am to 12pm",
    "gymPrice":"800 Rs",
    "gymDistance":"72373.0909 kms",
    "gymAddress":"Malad West",
    "gymRating":3.5,
    "gymCategory":"Sports"
    },
    {
    "gymId":"4",
    "gymName":"Royal GYM",
    "gymImg":"http://previews.123rf.com/images/andresr/andresr1008/andresr100800367/7508197-Group-of-people-doing-spinning-at-the-gym-and-smiling--Stock-Photo.jpg",
    "gymTime":"10 pm to 12pm",
    "gymPrice":"1000 Rs",
    "gymDistance":"10000.00 kms",
    "gymAddress":"Borivali West",
    "gymRating":2.5,
    "gymCategory":"Dance"
    }
    ,
    {
    "gymId":"5",
    "gymName":"5Star GYM",
    "gymImg":"https://i.ytimg.com/vi/MF_nOPEKE2g/maxresdefault.jpg",
    "gymTime":"10 pm to 1pm",
    "gymPrice":"200 Rs",
    "gymDistance":"12323.323 kms",
    "gymAddress":"Kandivali West",
    "gymRating":3.5,
    "gymCategory":"Pilates"
    }
    ,
    {
    "gymId":"6",
    "gymName":"Golden GYM",
    "gymImg":"http://www.nrgfitness.ie/site/wp-content/uploads/gym-instructor-images-2.jpg",
    "gymTime":"10 pm to 3pm",
    "gymPrice":"10000 Rs",
    "gymDistance":"22213.23 kms",
    "gymAddress":"Thane West",
    "gymRating":3,
    "gymCategory":"Swim"
    },
    {
    "gymId":"1",
    "gymName":"Shiva Gym",
    "gymImg":"http://www.bodybuilding.com/images/2015/december2/how-to-deal-with-a-busy-gym-graphics-3.jpg",
    "gymTime":"10 am to 11pm",
    "gymPrice":"1000 Rs",
    "gymDistance":"82828.92 kms",
     "gymAddress":"Dahisar West",
    "gymRating":3.5,
    "gymCategory":"Swim"
    },
    {
    "gymId":"2",
    "gymName":"Power Gym",
    "gymImg":"http://www.yourweightsolutions.com.au/wp-content/uploads/2014/08/Gym-perth.jpg",
    "gymTime":"11 am to 2pm",
    "gymPrice":"500 Rs",
    "gymDistance":"8222.323 kms",
     "gymAddress":"Goregon West",
    "gymRating":4.5,
    "gymCategory":"Cardio"

    },
    {
    "gymId":"3",
    "gymName":"ITC Gym",
    "gymImg":"http://www.crabwallmanorhotelandspa.com/getattachment/The-Spa/Fitness/Slideshow/slide-1/gym-sit-ups.jpg.aspx?width=5616&height=3744&ext=.jpg",
    "gymTime":"9 am to 12pm",
    "gymPrice":"800 Rs",
    "gymDistance":"72373.0909 kms",
    "gymAddress":"Malad West",
    "gymRating":3.5,
    "gymCategory":"Sports"
    },
    {
    "gymId":"4",
    "gymName":"Royal GYM",
    "gymImg":"http://previews.123rf.com/images/andresr/andresr1008/andresr100800367/7508197-Group-of-people-doing-spinning-at-the-gym-and-smiling--Stock-Photo.jpg",
    "gymTime":"10 pm to 12pm",
    "gymPrice":"1000 Rs",
    "gymDistance":"10000.00 kms",
    "gymAddress":"Borivali West",
    "gymRating":2.5,
    "gymCategory":"Dance"
    }
    ,
    {
    "gymId":"5",
    "gymName":"5Star GYM",
    "gymImg":"https://i.ytimg.com/vi/MF_nOPEKE2g/maxresdefault.jpg",
    "gymTime":"10 pm to 1pm",
    "gymPrice":"200 Rs",
    "gymDistance":"12323.323 kms",
    "gymAddress":"Kandivali West",
    "gymRating":3.5,
    "gymCategory":"Pilates"
    }
    ,
    {
    "gymId":"6",
    "gymName":"Golden GYM",
    "gymImg":"http://www.nrgfitness.ie/site/wp-content/uploads/gym-instructor-images-2.jpg",
    "gymTime":"10 pm to 3pm",
    "gymPrice":"10000 Rs",
    "gymDistance":"22213.23 kms",
    "gymAddress":"Thane West",
    "gymRating":3,
    "gymCategory":"Swim"
    }
    ]

    $scope.goDetail=function(l){
window.localStorage.setItem("itemDetails", JSON.stringify(l));
$state.go('detail');
    }
})
})
