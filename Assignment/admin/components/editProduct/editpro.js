myApp.controller(
  "EditProductController",
  function ($scope, $window, $http, $routeParams) {
    $http.get("http://localhost:3000/category").then(function (res) {
      $scope.categories = res.data;
    });
    $http.get("http://localhost:3000/size").then(function (res) {
      $scope.sizes = res.data;
    });
    $http.get("http://localhost:3000/color").then(function (res) {
      $scope.colors = res.data;
    });
    $http
      .get("http://localhost:3000/products/?id=" + $routeParams.id)
      .then(function (res) {
        const [product] = res.data;
        $scope.pro = product;
      });
    $scope.isValid = false;
    $scope.notifyError = "";

    $scope.closeNotifyError = function () {
      $scope.isValid = false;
    };

    $scope.addProSubmit = function () {
      if (
        $scope.pro.namePro === "" ||
        $scope.pro.pricePro === "" ||
        $scope.pro.soluong === "" ||
        $scope.pro.size === "" ||
        $scope.pro.color === "" ||
        $scope.pro.img === "" ||
        $scope.pro.desc === ""
      ) {
        $scope.notifyError = "Không được để trống!! Xin nhập đủ dữ liêu !!";
        $scope.isValid = true;
        return;
      }
      $http({
        method: "PUT",
        url: "http://localhost:3000/products/" + $routeParams.id,
        data: $scope.pro,
      }).then(function (res) {
        console.log(res.data);
        $window.location.href = "#!/listProduct";
      });
    };
  }
);
