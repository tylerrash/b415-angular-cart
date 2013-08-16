"use strict";

cart.controller("CartCtrl", function($scope, Products, Terms, Users, Promos) {
  $scope.products = Products;
  $scope.terms = Terms;
  $scope.users = Users;
  $scope.promos = Promos;

  // Defaults
  $scope.product = "guidance";
  $scope.isComponentSelected = false;
  $scope.user = "0";
  $scope.term = "monthly";
  $scope.promoCode;
  $scope.discount = 0;

  // Tests
  var isProductSelected = $scope.products[$scope.product] != null;
  var isUserSelected = $scope.user != null;
  var isTermSelected = $scope.term != null;
  var hasPromo = false;

  $scope.setPromoCode = function(promoCode) {
    hasPromo = (promoCode != null);

    $scope.promoCode = promoCode;
    $scope.discount = (hasPromo) ? $scope.promos[$scope.promoCode].discount : 0;

    $scope.calcTotal();
  };

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

  var calcSubTotal = function() {
    if ($scope.product == null || $scope.term == null)
      return 0;

    var basePrice = $scope.products[$scope.product].price[$scope.term];
    var componentPrice = ($scope.isComponentSelected) ? $scope.products[$scope.product].components.price[$scope.term] : 0;
    var usersPrice = $scope.calcUsersPrice();

    return basePrice + componentPrice + usersPrice;
  };

  $scope.calcDiscount = function() {
    if (!hasPromo)
      return 0;

    var subTotal = calcSubTotal();

    return (1 - $scope.promos[$scope.promoCode].discount) * subTotal;
  };

  $scope.calcTotal = function() {
    var subTotal = calcSubTotal();
    var discount = $scope.calcDiscount();

    return subTotal - discount;
  };

  $scope.submitOrder = function() {
    alert("Thanks");
  };

  // Debug

  $scope.$watch('product', function() {
    $scope.debugMsg = 'Product changed to ' + $scope.products[$scope.product].name;
  });

  $scope.$watch('isComponentSelected', function() {
    if ($scope.isComponentSelected)
      $scope.debugMsg = 'Added add-on (' + $scope.products[$scope.product].components.name + ')';
    else
      $scope.debugMsg = 'Removed add-on (' + $scope.products[$scope.product].components.name + ')';
  });

  $scope.$watch('user', function() {
    $scope.debugMsg = 'Additional users changed to ' + $scope.user;
  });

  $scope.$watch('term', function() {
    $scope.debugMsg = 'Term changed to ' + $scope.term;
  });

  $scope.$watch('promoCode', function() {
    $scope.debugMsg = 'Promo code changed to ' + $scope.promoCode;
  });
});