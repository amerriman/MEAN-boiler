app.directive('sampleStuff', function(){
  return {
    restrict: 'E',
    templateUrl: '/sample/sample-stuff.html',
    controller: ['$scope', function ($scope){

      $scope.stuff = "ALL THE SAMPLE THINGS!";

    }]
  };
});
