myApp.controller("AddProController", function ($scope, $window, $http) {
  $http.get("http://localhost:3000/size").then(function (res) {
    $scope.sizes = res.data;
  });
  $http.get("http://localhost:3000/color").then(function (res) {
    $scope.colors = res.data;
  });
  $scope.isValid = false;
  $scope.notifyError = "";
  $scope.pro = {
    namePro: "",
    pricePro: "",
    soluong: "",
    size: "",
    color: "",
    img: "",
    desc: "",
  };
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
      method: "POST",
      url: "http://localhost:3000/products",
      data: $scope.pro,
    }).then(function (res) {
      console.log(res.data);
      $window.location.href = "#!/listProduct";
    });
  };
});
