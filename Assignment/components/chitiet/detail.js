app.controller(
  "DetailController",
  function ($scope, $http, $routeParams, $window) {
    $scope.productId = $routeParams.id;

    $http
      .get("http://localhost:3000/products/" + $scope.productId)
      .then(function (res) {
        $scope.product = res.data;
        $scope.product = {
          ...$scope.product,
          quanlity: 1,
        };
        if ($scope.product) {
          $http
            .get("http://localhost:3000/category/" + $scope.product.idCategory)
            .then(function (res) {
              console.log(res.data);
              $scope.nameCategory = res.data.name;
            });
        }
      });

    $http.get("http://localhost:3000/size").then(function (res) {
      $scope.sizes = res.data;
    });
    $http.get("http://localhost:3000/color").then(function (res) {
      $scope.colors = res.data;
    });

    // $scope.cart = {
    //   soluong: 1,
    //   size: "",
    //   color: "",
    // };

    $scope.isValid = false;
    $scope.notifyError = "";
    $scope.addCart = function (item) {
      console.log(item);
      if (item.quanlity === "") {
        $scope.notifyError = "Không được để trống!! Xin nhập đủ dữ liêu !!";
        $scope.isValid = true;
        return;
      }
      $http
        .get(`http://localhost:3000/cart?name=${item.name}`)
        .then(function (response) {
          if (response.data.length > 0) {
            const existingItem = response.data[0];

            existingItem.quanlity += 1;
            return $http
              .put(
                `http://localhost:3000/cart/${existingItem.id}`,
                existingItem
              )
              .then(function (response) {
                $window.location.href = "#!/cart";
              });
          } else {
            // If item doesn't exist, add it to the cart
            return $http
              .post("http://localhost:3000/cart", item)
              .then(function (response) {
                $window.location.href = "#!/cart";
              });
          }
        });
    };
    $scope.closeNotifyError = function () {
      $scope.isValid = false;
    };
  }
);
