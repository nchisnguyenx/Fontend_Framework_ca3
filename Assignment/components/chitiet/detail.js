app.controller("DetailController", function ($scope, $http, $routeParams) {
  $scope.productId = $routeParams.id;
  $http
    .get("http://localhost:3000/products/" + $scope.productId)
    .then(function (res) {
      $scope.product = res.data;
    });
  // $http.get("http://localhost:3000/category").then(function (res) {
  //   $scope.categories = res.data;
  // });
});
