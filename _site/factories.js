"use strict";

cart.factory("Products", function() {
  return {
    "guidance":
    {
      "name": "Beyond415 Guidance",
      "id": "guidance",
      "price": 
      {
        "monthly": 30,
        "yearly": 300
      },
      "components":
      {
        "name": "Downloadable Documents",
        "id": "docs",
        "price":
        {
          "monthly": 10,
          "yearly": 100
        },
        "users":
        {
          "price": 
          {
            "monthly": 5,
            "yearly": 50
          }
        }
      },
      "users":
      {
        "price": 
        {
          "monthly": 15,
          "yearly": 150
        }
      }
    },

    "advancenotice":
    {
      "name": "Beyond415 AdvanceNotice",
      "id": "advancenotice",
      "price": 
      {
        "monthly": 40,
        "yearly": 400
      },
      "users":
      {
        "price": 
        {
          "monthly": 20,
          "yearly": 200
        }
      }
    },

    "workcenter":
    {
      "name": "Beyond415 WorkCenter",
      "id": "workcenter",
      "price": 
      {
        "monthly": 50,
        "yearly": 500
      },
      "components":
      {
        "name": "Client Gateway",
        "id": "gateway",
        "price":
        {
          "monthly": 30,
          "yearly": 300
        },
        "users":
        {
          "price": 
          {
            "monthly": 0,
            "yearly": 0
          }
        }
      },
      "users":
      {
        "price": 
        {
          "monthly": 25,
          "yearly": 250
        }
      }
    }
  };
});

cart.factory("Terms", function() {
  return {
    "monthly":
    {
      "id": "monthly",
      "name": "Monthly"
    },
    "yearly":
    {
      "id": "yearly",
      "name": "Yearly"
    }
  };
});

cart.factory("Users", function() {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8];
});

cart.factory("Configurations", function() {
  return false;
});