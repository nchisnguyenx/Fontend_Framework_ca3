myApp.controller(
  "editCategoryController",
  function ($scope, $window, $http, $routeParams) {
    $http
      .get("http://localhost:3000/category/?id=" + $routeParams.id)
      .then(function (res) {
        const [cate] = res.data;
        $scope.cate = cate;
      });
    $scope.isValid = false;
    $scope.notifyError = "";

    $scope.closeNotifyError = function () {
      $scope.isValid = false;
    };

    $scope.editCate = function () {
      if ($scope.cate.name === "") {
        $scope.notifyError = "Không được để trống!! Xin nhập đủ dữ liêu !!";
        $scope.isValid = true;
        return;
      }
      $http({
        method: "PUT",
        url: "http://localhost:3000/category/" + $routeParams.id,
        data: $scope.cate,
      }).then(function (res) {
        console.log(res.data);
        $window.location.href = "#!/listCategory";
      });
    };
  }
);
