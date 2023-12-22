app.controller(
  "CartController",
  function ($scope, $http, $routeParams, $window) {
    $http.get("http://localhost:3000/cart").then(function (res) {
      $scope.carts = res.data;
      const [carts] = $scope.carts;
      $scope.cart = carts;
      console.log($scope.carts);
      $scope.total = 0;
      for (let i = 0; i < $scope.carts.length; i++) {
        $scope.total += $scope.carts[i].quanlity * $scope.carts[i].price;
      }
      console.log($scope.total);

      $scope.soluongsp = $scope.carts.length;
      sessionStorage.getItem("cartNumber", $scope.soluongsp);
    });

    $scope.deleteCart = function (id) {
      $http({
        method: "DELETE",
        url: "http://localhost:3000/cart/" + id,
      }).then(function (res) {
        $scope.carts = $scope.carts.filter(function (pro) {
          return cart.id !== id;
        });
      });
    };
    $scope.updateCart = function (item) {
      $http
        .put("http://localhost:3000/cart/" + item.id, item)
        .then(function (res) {
          $window.location.reload();
          $scope.cart = [];
          $http.put("http://localhost:3000/cart", $scope.cart);
        });
    };
  }
);
