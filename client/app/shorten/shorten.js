angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {
    text : " "
  }
  console.log($scope.link)

  $scope.addLink = function(){
    if($scope.link.text){
      Links.post($scope.link.text);
      $scope.link.text = " "
    }
  }
});
