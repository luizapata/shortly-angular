angular.module('shortly.links', [])

  .controller('LinksController', function ($scope, Links) {
    // Your code here
    $scope.data = {
      links : []
    };
    $scope.getLinks = function(){
      Links.get().then(function(res){
        $scope.data.links = res.data
      });
    }
    $scope.getLinks();
});
