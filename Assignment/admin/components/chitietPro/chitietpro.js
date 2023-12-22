myApp.controller(
  "chitietProController",
  function ($scope, $routeParams, $http) {
    $http
      .get("http://localhost:3000/products/" + $routeParams.id)
      .then(function (res) {
        $scope.pro = res.data;
        if ($scope.pro) {
          $http
            .get("http://localhost:3000/category/" + $scope.pro.idCategory)
            .then(function (res) {
              $scope.nameCategory = res.data.name;
            });
        }
      });
  }
);
