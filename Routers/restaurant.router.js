const express = require("express");
const restaurantRouter = express.Router()
const {createRestaurantController,readRestaurantController,readRestaurantsByCuisineController,updateRestaurantController,deleteRestaurantController,searchRestaurantsByLocationController,filterRestaurantsByRatingController} = require("../Controllers/restaurant.controller.js")

restaurantRouter.get("/search",searchRestaurantsByLocationController);
restaurantRouter.get("/:restaurantName",readRestaurantController);
restaurantRouter.get("/cusine/:cusineType",readRestaurantsByCuisineController);
restaurantRouter.get("/rating/:minRating",filterRestaurantsByRatingController);

restaurantRouter.post("/",createRestaurantController);
restaurantRouter.post("/:restaurantId",updateRestaurantController);

restaurantRouter.delete("/:restaurantId",deleteRestaurantController);

module.exports = restaurantRouter;