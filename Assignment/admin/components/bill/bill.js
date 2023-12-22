myApp.controller("billController", function ($scope, $http) {
  $http.get("http://localhost:3000/checkout").then(function (res) {
    // console.log(res.data);
    $scope.bills = res.data;
    console.log($scope.bills);
  });

  $scope.updateBill = function (id) {
    console.log($scope.bills);
    const [bill] = $scope.bills;
    $scope.bill = bill;
    $http({
      method: "PUT",
      url: "http://localhost:3000/bill/" + id,
      data: $scope.bill,
    }).then(function (response) {
      console.log("thanh cong");
    });
  };
});
