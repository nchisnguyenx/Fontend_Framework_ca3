myApp.controller("addCategoryController", function ($scope, $window, $http) {
  $scope.isValid = false;
  $scope.notifyError = "";
  $scope.cate = {
    name: "",
  };
  $scope.closeNotifyError = function () {
    $scope.isValid = false;
  };

  $scope.addCate = function () {
    if ($scope.cate.name === "") {
      $scope.notifyError = "Không được để trống!! Xin nhập đủ dữ liêu !!";
      $scope.isValid = true;
      return;
    }
    $http({
      method: "POST",
      url: "http://localhost:3000/category",
      data: $scope.cate,
    }).then(function (res) {
      console.log(res.data);
      $window.location.href = "#!/listCategory";
    });
  };
});
