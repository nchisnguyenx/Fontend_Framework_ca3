app.controller("HomeController", function ($scope, $http) {
  $http.get("http://localhost:3000/products").then(function (res) {
    $scope.products = res.data;
  });
  $http.get("http://localhost:3000/category").then(function (res) {
    $scope.categories = res.data;
  });
  $scope.handleCategory = function (id) {
    $http
      .get("http://localhost:3000/products/?idCategory=" + id)
      .then(function (res) {
        $scope.products = res.data;
      });
  };
});
