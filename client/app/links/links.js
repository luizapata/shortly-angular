angular.module('shortly.links', [])

  .controller('LinksController', function ($scope, Links) {
    // Your code here
    $scope.data = {
      links : []
    };
    $scope.getLinks = function(){
      var klink = Links.get();
      $scope.data.links.push(klink);
      console.log('KLINK!!!', klink)
    }
    $scope.getLinks();
});
