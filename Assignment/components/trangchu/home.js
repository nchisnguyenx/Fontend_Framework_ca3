app.controller("HomeController", function ($scope, $http) {
  $http.get("http://localhost:3000/products").then(function (res) {
    $scope.products = res.data;
  });
  $http.get("http://localhost:3000/category").then(function (res) {
    $scope.categories = res.data;
  });
  $scope.handleCategoryS1 = function (id) {
    $http
      .get("http://localhost:3000/products/?idDanhmuc=" + id)
      .then(function (res) {
        $scope.products = res.data;
      });
  };
});
