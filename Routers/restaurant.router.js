const express = require("express");
const restaurantRouter = express.Router()
const {createRestaurantController,readRestaurantController,readRestaurantsByCuisineController,updateRestaurantController,deleteRestaurantController,searchRestaurantsByLocationController,filterRestaurantsByRatingController,addDishToMenuController,removeDishFromMenuController,addRestaurantReviewAndRatingController} = require("../Controllers/restaurant.controller.js")

restaurantRouter.get("/search",searchRestaurantsByLocationController);
restaurantRouter.get("/:restaurantName",readRestaurantController);
restaurantRouter.get("/cusine/:cusineType",readRestaurantsByCuisineController);
restaurantRouter.get("/rating/:minRating",filterRestaurantsByRatingController);

restaurantRouter.post("/",createRestaurantController);
restaurantRouter.post("/:restaurantId",updateRestaurantController);
restaurantRouter.post("/:restaurantId/menu",addDishToMenuController);
restaurantRouter.post("/:restaurantId/reviews",addRestaurantReviewAndRatingController);

restaurantRouter.delete("/:restaurantId",deleteRestaurantController);
restaurantRouter.delete("/:restaurantId/menu/:dishName",removeDishFromMenuController);

module.exports = restaurantRouter;