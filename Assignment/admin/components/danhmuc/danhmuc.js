myApp.controller("categoryController", function ($scope, $http) {
  $scope.i = 1;
  $http.get("http://localhost:3000/category").then(function (res) {
    $scope.categories = res.data;
  });
  $scope.deleteCate = function (id) {
    $http.delete("http://localhost:3000/category/" + id).then(function (res) {
      $scope.categories = $scope.categories.filter(function (cate) {
        return cate.id !== id;
      });
    });
  };
});
