angular.module('shortly.links', [])

  .controller('LinksController', function ($scope, Links) {
    // Your code here
    $scope.data = {
      links : []
    };
    $scope.getLinks = function(){
      console.log('$$$$$$',Links);
      return Links.$get;
    }
    $scope.test = 'testing scope'
    $scope.getLinks();
});
