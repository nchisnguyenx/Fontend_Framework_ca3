myApp.controller("ProductController", function ($scope, $window, $http) {
  $scope.i = 1;
  $http.get("http://localhost:3000/products").then(function (res) {
    $scope.products = res.data;
  });
  $scope.deletePro = function (id) {
    $http.delete("http://localhost:3000/products/" + id).then(function (res) {
      $scope.products = $scope.products.filter(function (pro) {
        return pro.id !== id;
      });
    });
  };
});
