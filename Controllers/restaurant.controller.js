const {createRestaurant,readRestaurant,readRestaurantsByCuisine,updateRestaurant,deleteRestaurant,searchRestaurantsByLocation,filterRestaurantsByRating,addDishToMenu,removeDishFromMenu,addRestaurantReviewAndRating} = require("../Queries/restaurant.queries.js");

const createRestaurantController = async(req,res)=>{
  const {body} = req;
  try{
    const restaurant = await createRestaurant(body)
    res.status(201).json({message:"Restaurant created",restaurant});
  }catch(error){
    res.status(500).json({error:error.message});
  }
}

const readRestaurantController = async(req,res)=>{
  const {restaurantName} = req.params;
  try{
    const restaurant = await readRestaurant(restaurantName)
    res.status(200).json({message:"Restaurant found",restaurant});
  }catch(error){
    res.status(500).json({error:error.message});
  }
}

const readRestaurantsByCuisineController = async(req,res)=>{
  const {cusineType} = req.params;
  try{
    const restaurant = await readRestaurantsByCuisine(cusineType)
    res.status(200).json({message:"Restaurant found",restaurant});
  }catch(error){
    res.status(500).json({error:error.message});
  }
}

const updateRestaurantController = async(req,res)=>{
  const {restaurantId} = req.params;
  const {body} = req;
  try{
    const restaurant = await updateRestaurant(restaurantId,body)
    res.status(200).json({message:"Restaurant updated",restaurant});
  }catch(error){
    res.status(500).json({error:error.message});
  }
}

const deleteRestaurantController = async(req,res)=>{
  const {restaurantId} = req.params;
  try{
    const restaurant = await deleteRestaurant(restaurantId)
    res.status(200).json({message:"Restaurant deleted",restaurant});
  }catch(error){
    res.status(500).json({error:error.message});
  }
}

const searchRestaurantsByLocationController = async(req,res)=>{
  const {location} = req.query;
  try{
  console.log(location)
    const restaurant = await searchRestaurantsByLocation(location)
    res.status(200).json({message:"Restaurant found",restaurant});
  }catch(error){
    res.status(500).json({error:error.message});
  }
}
const filterRestaurantsByRatingController = async(req,res)=>{
  const {minRating} = req.params;
  try{
    const restaurant = await filterRestaurantsByRating(minRating)
    res.status(200).json({message:"Restaurants found",restaurant});
  }catch(error){
    res.status(500).json({error:error.message});
  }
}
const addDishToMenuController = async(req,res)=>{
  const {restaurantId} = req.params
  const {body} = req;
  try{
    const restaurant = await addDishToMenu(restaurantId,body)
    res.status(200).json({message:"Dish added in menu",restaurant});
  }catch(error){
    res.status(500).json({error:error.message});
  }
}
const removeDishFromMenuController = async(req,res)=>{
  const {restaurantId,dishName} = req.params
  try{
    const restaurant = await removeDishFromMenu(restaurantId,dishName)
    res.status(200).json({message:"Dish deleted from menu",restaurant});
  }catch(error){
    res.status(500).json({error:error.message});
  }
}
const addRestaurantReviewAndRatingController = async(req,res)=>{
  const {restaurantId} = req.params
  const {body} = req
  try{
    const restaurant = await addRestaurantReviewAndRating(restaurantId,body)
    res.status(200).json({message:"Review added",restaurant});
  }catch(error){
    res.status(500).json({error:error.message});
  }
}

module.exports = {createRestaurantController,readRestaurantController,readRestaurantsByCuisineController,updateRestaurantController,deleteRestaurantController,searchRestaurantsByLocationController,filterRestaurantsByRatingController,addDishToMenuController,removeDishFromMenuController,addRestaurantReviewAndRatingController}