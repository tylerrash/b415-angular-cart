"use strict"

app.controller("CartCtrl", ["$scope", function(scope) {
  scope.products = [
    { 
      value: "guidance", 
      label: "Guidance", 
      price: 
      {
        "monthly": 35,
        "yearly": 350
      },
      addons: 
      { 
        name: "Downloadable Documents",
        price:
        {
          "monthly": 10,
          "yearly": 100
        }
      }
    },

    { 
      value: "advancenotice", 
      label: "AdvanceNotice",
      price:
      {
        "monthly": 40,
        "yearly": 400
      },
    },

    { 
      value: "workcenter", 
      label: "Workcenter", 
      price:
      {
        "monthly": 50,
        "yearly": 500
      },
      addons: 
      {
        name: "Client Gateway",
        price:
        {
          "monthly": 10,
          "yearly": 100
        } 
      }
    }
  ];

  scope.promoCodes = [
    {
      "INTUIT50":
      {
        discount: 0.5
      }
    }
  ];

  scope.promoCode = "INTUIT50";

  scope.discount = (scope.promoCode != null) ? scope.promoCodes[0][scope.promoCode].discount : 0;

  scope.calcTotal = function() {
    var basePrice = (scope.billing != null) ? scope.product.price[scope.billing] : 0;
    var addonPrice = (scope.addon) ? scope.product.addons.price[scope.billing] : 0;

    return (basePrice + addonPrice) * (1 - scope.discount);
  }
}]);