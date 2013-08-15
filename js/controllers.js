"use strict";

cart.controller("CartCtrl", function($scope, Products, Terms, Users) {
  $scope.products = Products;
  $scope.terms = Terms;
  $scope.users = Users;

  // Defaults
  $scope.product = "guidance";
  $scope.isComponentSelected = false;
  $scope.user = "0";
  $scope.term = "monthly";

  // Tests
  var isProductSelected = $scope.products[$scope.product] != null;
  var isUserSelected = $scope.user != null;
  var isTermSelected = $scope.term != null;

  $scope.calcUsersPrice = function() {
    if (!isUserSelected || !isTermSelected) 
      return 0;

    var basePrice = $scope.user * $scope.products[$scope.product].users.price[$scope.term];

    var calcComponentPrice = function() {
      if (!isProductSelected || !$scope.isComponentSelected) 
        return 0;

      return ($scope.user * $scope.products[$scope.product].components.users.price[$scope.term]);
    };

    return basePrice + calcComponentPrice();
  };

  $scope.calcTotal = function() {
    if ($scope.product == null || $scope.term == null)
      return 0;

    var basePrice = $scope.products[$scope.product].price[$scope.term];
    var componentPrice = ($scope.isComponentSelected) ? $scope.products[$scope.product].components.price[$scope.term] : 0;
    var usersPrice = $scope.calcUsersPrice();

    return basePrice + componentPrice + usersPrice;
  };

  $scope.submitOrder = function() {
    alert("Thanks");
  };

});