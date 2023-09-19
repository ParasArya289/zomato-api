require("../mongoDB")

const Restaurant = require("../Models/restaurant.model.js");
const User = require("../Models/user.model.js")

const createRestaurant = async(restaurant) => {
  try{
    const newRestaurant = new Restaurant(restaurant);
    const savedRestaurant = await newRestaurant.save();
    return savedRestaurant;
  }catch(error){
    throw new Error("Failed to create restaurant")
  }
}

const readRestaurant = async(restaurantName)=>{
  try{
    const foundRestaurant = await Restaurant.findOne({name:restaurantName});
    
    if(!foundRestaurant){
      throw new Error("No restaurant found")
    }
    
    return foundRestaurant;
  }catch(error){
    throw error
  }
}

const readAllRestaurant = async()=>{
  try{
    const foundRestaurants = await Restaurant.find();
    console.log(foundRestaurants)
    return foundRestaurants;
  }catch(error){
    console.error("Failed to get restaurants")
  }
}

const readRestaurantsByCuisine = async(cuisine)=>{
  try{
    const foundRestaurants = await Restaurant.find({cuisine});
    if(!foundRestaurants.length){
      throw new Error("No restaurant found")
    }
    return foundRestaurants;
  }catch(error){
    throw error
  }
}

const updateRestaurant = async(restaurantId,updatedData)=>{
  try{
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId,updatedData,{new:true});
    console.log(updatedRestaurant)
    if(!updatedRestaurant){
      throw new Error("Restaurant not found")
    }
    return updatedRestaurant;
  }catch(error){
    throw error
  }
}
const deleteRestaurant = async(restaurantId,updatedData)=>{
  try{
    const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
    if(!deletedRestaurant){
      throw new Error("Restaurant not found")
    }
    return deletedRestaurant
  }catch(error){
    throw error;
  }
}
const searchRestaurantsByLocation = async(location)=>{
  try{
    const foundRestaurants = await Restaurant.find({city:location});
    if(!foundRestaurants.length){
      throw new Error("No restaurants found for location")
    }
    return foundRestaurants
  }catch(error){
    throw error;
  }
}
const filterRestaurantsByRating = async(gteRating)=>{
  try{
    const foundRestaurants = await Restaurant.find({rating:{$gte:gteRating}});
    if(!foundRestaurants.length){
      throw new Error("No restaurants found for rating")
    }
    return foundRestaurants
  }catch(error){
    throw error
  }
}

const addDishToMenu = async(restaurantId,dish)=>{
  try{
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId,{$push:{menu:dish}},{new:true});
    return updatedRestaurant;
  }catch(error){
    throw new Error("Failed to update menu")
  }
}
const removeDishFromMenu = async(restaurantId,dishName)=>{
  try{
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId,{$pull:{menu:{name:dishName}}},{new:true});
    return updatedRestaurant;
  }catch(error){
    throw new Error("Failed to update menu")
  }
}
const addRestaurantReviewAndRating = async(restaurantId,review)=>{
  try{
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId,{$push:{reviews:review}},{new:true}).populate("reviews.user");
    if(!updatedRestaurant){
    throw new Error("Failed to add review")
    }
    console.log(updatedRestaurant)
    return updatedRestaurant;
  }catch(error){
    throw error;
  }
}

const getUserReviewsForRestaurant = async(restaurantId)=>{
  try{
    const {reviews} = await Restaurant.findById(restaurantId).populate("reviews.user")
    return reviews
  }catch(error){
    throw new Error("Faied to retrieve user reviews")
  }
}

module.exports = {createRestaurant,readRestaurant,readAllRestaurant,readRestaurantsByCuisine,updateRestaurant,deleteRestaurant,searchRestaurantsByLocation,filterRestaurantsByRating,addDishToMenu,addRestaurantReviewAndRating,getUserReviewsForRestaurant,removeDishFromMenu}