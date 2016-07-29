app.controller('dashboardCtrl', function($cordovaGeolocation, $scope, $state, $ionicSideMenuDelegate, $ionicLoading, dataService, $rootScope) {
	$scope.$on('$ionicView.enter', function () {
 $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
//// dataService.getCategory().then(function (result) {
////  console.log(result);
//////  $scope.dashList = result.data.response;
////// });
//dataService.getCenter().then(function (result) {
//  console.log(result);
// });

//dataService.getGymMemberDetails().then(function (result) {
//  console.log(result);
// });


 
	$scope.dashList = [
	{
"cat_id":"1",
"cat_name":"CARDIO",
"image_path":"http://greatist.com/sites/default/files/styles/big_share/public/Tag_Cardio.png?itok=KuJ2JPk4",
	},
	{
"cat_id":"2",
"cat_name":"DANCE",
"image_path":"http://www.dancesofindia.co.in/images/Why-is-dance-better-than-traditional-workouts-Blogs-Way-of-Life-Studio-Mumbai.jpg",
	},
	{
"cat_id":"3",
"cat_name":"SPIN",
"image_path":"http://mycoachkat.com/wp-content/uploads/2016/04/CardioTextimg1.jpg",
	},
	{
"cat_id":"4",
"cat_name":"SWIM",
"image_path":"http://www.baronnews.com/wp-content/uploads/2012/04/swim.jpg",
	},
	{
"cat_id":"5",
"cat_name":"SPORTS",
"image_path":"http://health.uq.edu.au/filething/get-styled/study_area_hero_825x320/3683/Exercise-and-Sport-Sciences6.jpg?itok=5taM4M60",
	},
	{
"cat_id":"6",
"cat_name":"TONE",
"image_path":"http://hdwpro.com/wp-content/uploads/2016/02/Super-Sports-Wallpaper.jpg",
	},
	{
"cat_id":"7",
"cat_name":"YOGA",
"image_path":"http://i.dailymail.co.uk/i/pix/2014/12/22/2438B44700000578-2883729-Pot_yoga_-m-5_1419262687022.jpg",
	},
	{
"cat_id":"8",
"cat_name":"COMBAT",
"image_path":"http://www.courtlough.ie/wp-content/uploads/2013/03/IMG_4889.JPG",
	},
	{
"cat_id":"9",
"cat_name":"PILATES",
"image_path":"https://breckenhealth.com.au/files/2015/10/pilates_slide01.png",
	},
  {
"cat_id":"10",
"cat_name":"WEIGHT TRANING",
"image_path":" http://img.aws.livestrongcdn.com/ls-article-image-640/ds-photo/getty/article/199/251/181046007.jpg",
  },
  {
"cat_id":"11",
"cat_name":"BOXING",
"image_path":"http://www.bhmpics.com/thumbs/kick_boxing_training_bag_to_hit-t3.jpg",
  }
 ,
  {
"cat_id":"12",
"cat_name":"CROSSFIT",
"image_path":"http://www.domyos.co.uk/sites/domyos/files/conseils-sculpt-exercice-challenge-cross-training-header.jpg",
  },
  {
"cat_id":"13",
"cat_name":"AROBICS",
"image_path":"http://cdn2.stylecraze.com/wp-content/uploads/2013/07/4312-best-aerobic-exercise-videos.jpg",
  }
  ,
  {
"cat_id":"14",
"cat_name":"ZUMBA",
"image_path":"http://wavesgym.com/wp-content/uploads/2015/01/Zumba-1.jpg",
  }
	];
	$scope.goList=function(l){
    window.localStorage.setItem("itemCategory", JSON.stringify(l));
    $rootScope.HeaderName = l.cat_name;
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
setTimeout(function(){
   $state.go('list');
    },2000)	}
 setTimeout(function () {
            current();
        },2000);
function current(){
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
            var lat  = position.coords.latitude
            var long = position.coords.longitude


             localStorage.setItem("lat", lat);
            localStorage.setItem("long", long);
            var lastLat=localStorage.getItem("lat");
            /*if(lat != lastLat)
            {
              var delOrder = "Delete from PlaceDetails";
           $cordovaSQLite.execute(db, delOrder, []).then(function (res) {
           }, function (err) {
        
          });
            }*/
    }, function(err) {
    });
}
})
})
app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        var content = element.find('a');
        content.css({
            'background': 'linear-gradient(rgba(0, 0, 0, 0.60),rgba(0, 0, 0, 0.60)),url(' + url +')',
            'background-size' : 'cover',
            'height':'100%',
              'border':'0px solid black'
        });
    }
});
    