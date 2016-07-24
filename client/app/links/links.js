angular.module('shortly.links', [])

  .controller('LinksController', function ($scope, Links) {
    // Your code here
    $scope.data = {
      links : []
    };
    // console.log('scope.data',$scope.data)
    $scope.getLinks = function(res){
      Links.get().then(function(res){
        console.log('res.data!!!!!!',res)
        $scope.data.links = res
      });
    }
    $scope.getLinks();
    
});
