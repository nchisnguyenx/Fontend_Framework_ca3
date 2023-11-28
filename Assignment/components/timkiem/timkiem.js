app.controller("TimkiemController", function ($scope, $http) {
  $scope.selectedCategories = {};
  $scope.filteredProducts = [];
  $scope.minPrice = 2500;
  $scope.loading = true;

  // Đọc dữ liệu từ json-server
  $http.get("http://localhost:3000/products").then(function (response) {
    $scope.products = response.data;
    $http.get("http://localhost:3000/category").then(function (response) {
      $scope.categories = response.data;

      // Mặc định chọn tất cả danh mục và lọc tất cả sản phẩm
      $scope.categories.forEach(function (category) {
        $scope.selectedCategories[category.id] = true;
      });
      $scope.filterProducts();
      $scope.loading = false;
    });
  });

  // Lọc sản phẩm khi danh mục được chọn thay đổi
  $scope.filterProducts = function () {
    $scope.filteredProducts = $scope.products.filter(function (product) {
      var categoryCondition = $scope.selectedCategories[product.idCategory];
      var priceCondition = product.price <= $scope.minPrice;
      return categoryCondition && priceCondition;
    });
  };
});
