app.controller("checkoutController", function ($scope, $http, $window) {
  $http.get("http://localhost:3000/cart").then(function (res) {
    $scope.carts = res.data;
    const [carts] = $scope.carts;
    $scope.cart = carts;
    // console.log($scope.carts);
    $scope.total = 0;
    for (let i = 0; i < $scope.carts.length; i++) {
      $scope.total += $scope.carts[i].quanlity * $scope.carts[i].price;
    }
  });
  $scope.hoantat = function (item) {
    $scope.checkout = {
      ...item,
      ...$scope.carts,
      total: $scope.total,
      trangthai: "",
    };

    $http
      .post("http://localhost:3000/checkout", $scope.checkout)
      .then(function (res) {
        $http.post("http://localhost:3000/cart", []);
        $window.location.href = "#!";
      });
  };
});
