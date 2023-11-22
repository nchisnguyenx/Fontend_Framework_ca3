app.controller("DetailController", function ($scope, $routeParams) {
  // Controller logic for the about view
  console.log($routeParams);
  $scope.xinchao1 = "Xinchao1";
  $scope.id = $routeParams.id;
  $scope.ten = $routeParams.ten;
});
