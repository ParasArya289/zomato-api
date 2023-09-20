const express = require("express");
const restaurantRouter = express.Router()
const {createRestaurantController,readRestaurantController,readRestaurantsByCuisineController,updateRestaurantController,deleteRestaurantController,searchRestaurantsByLocationController,filterRestaurantsByRatingController,addDishToMenuController,removeDishFromMenuController,addRestaurantReviewAndRatingController,getUserReviewsForRestaurantController} = require("../Controllers/restaurant.controller.js")
const {addUserController} = require("../Controllers/user.controller.js")

restaurantRouter.get("/search",searchRestaurantsByLocationController);
restaurantRouter.get("/:restaurantName",readRestaurantController);
restaurantRouter.get("/cuisine/:cusineType",readRestaurantsByCuisineController);
restaurantRouter.get("/rating/:minRating",filterRestaurantsByRatingController);
restaurantRouter.get("/:restaurantId/reviews",getUserReviewsForRestaurantController);

restaurantRouter.post("/",createRestaurantController);
restaurantRouter.post("/:restaurantId",updateRestaurantController);
restaurantRouter.post("/:restaurantId/menu",addDishToMenuController);
restaurantRouter.post("/:restaurantId/reviews",addRestaurantReviewAndRatingController);
restaurantRouter.post("/user/signup",addUserController);

restaurantRouter.delete("/:restaurantId",deleteRestaurantController);
restaurantRouter.delete("/:restaurantId/menu/:dishName",removeDishFromMenuController);

module.exports = restaurantRouter;