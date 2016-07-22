angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {
    
  }
//   $scope.addLink = function(){
//     console.log($location);
//     $location({
//       method:'POST',
//       url: $location
//     })
//   }
// });

  $scope.addLink = function(url){
    Links.post();
  }
});
