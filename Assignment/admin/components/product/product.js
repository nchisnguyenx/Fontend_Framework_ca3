myApp.controller("ProductController", function ($scope, $window, $http) {
  $scope.i = 1;
  $http.get("http://localhost:3000/products").then(function (res) {
    $scope.products = res.data;
  });
});
