require("./mongoDB")

const Restaurant = require("./Models/restaurant.model.js");
const User = require("./Models/user.model.js");

const createRestaurant = async(restaurant) => {
  try{
    const newRestaurant = new Restaurant(restaurant);
    const savedRestaurant = await newRestaurant.save();
    console.log(savedRestaurant)
    return savedRestaurant;
  }catch(error){
    console.error("Failed to create restaurant")
  }
}

const readRestaurant = async(restaurantName)=>{
  try{
    const foundRestaurant = await Restaurant.findOne({name:restaurantName});
    console.log(foundRestaurant)
    return foundRestaurant;
  }catch(error){
    console.error("Failed to search restaurant")
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
    console.log(foundRestaurants)
    return foundRestaurants;
  }catch(error){
    console.error("Failed to get restaurants")
  }
}

const updateRestaurant = async(restaurantId,updatedData)=>{
  try{
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId,updatedData,{new:true});
    console.log(updatedRestaurant)
    return updatedRestaurant;
  }catch(error){
    console.error("Failed to update restaurants")
  }
}
const deleteRestaurant = async(restaurantId,updatedData)=>{
  try{
    const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
    const updatedRestaurans = await readAllRestaurants();
    console.log(deletedRestaurant,updatedRestaurans)
    return {deletedRestaurant,updatedRestaurans};
  }catch(error){
    console.error("Failed to delete restaurants")
  }
}
const searchRestaurantsByLocation = async(location)=>{
  try{
    const foundRestaurants = await Restaurant.find({city:location});
    console.log(foundRestaurants)
    return foundRestaurants
  }catch(error){
    console.error("Failed to find restaurants")
  }
}
const filterRestaurantsByRating = async(gteRating)=>{
  try{
    const foundRestaurants = await Restaurant.find({rating:{$gte:gteRating}});
    console.log(foundRestaurants)
    return foundRestaurants
  }catch(error){
    console.error("Failed to find restaurants")
  }
}

const addDishToMenu = async(restaurantId,dish)=>{
  try{
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId,{$push:{menu:dish}},{new:true});
    console.log(updatedRestaurant)
    return updatedRestaurant;
  }catch(error){
    console.error("Failed to update restaurants")
  }
}
const removeDishFromMenu = async(restaurantId,dishName)=>{
  try{
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId,{$pull:{menu:{name:dishName}}},{new:true});
    console.log(updatedRestaurant)
    return updatedRestaurant;
  }catch(error){
    console.error("Failed to update restaurants")
  }
}
const addRestaurantReviewAndRating = async(restaurantId,review)=>{
  try{
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId,{$push:{reviews:review}}).populate("reviews.user","fullname username");
    console.log(updatedRestaurant)
    return updatedRestaurant;
  }catch(error){
    console.error("Failed to update restaurants")
  }
}

const getUserReviewsForRestaurant = async(restaurantId,username)=>{
  try{
  // const userObjectId = mongoose.Types.ObjectId(userId)
    const {reviews} = await Restaurant.findById(restaurantId).populate("reviews.user")
    const filteredReviews = reviews.filter(({user})=>user.username === username)
    if(!filteredReviews.length){
      throw new Error("No result")
    }
    console.log(filteredReviews)
    return filteredReviews
  }catch(error){console.error("Faied to retrieve user review")}
}
// getUserReviewsForRestaurant("65088a03173a4896a43571ca","parasarya")

// addRestaurantReviewAndRating("65088a03173a4896a43571ca",{
//   rating:4,
//   text:"Old memories",
//   user:"650888608c49fe65e80c05c5"
// })

// const addUser = async(userData)=>{
//   try{
//     const newUser = new User(userData);
//     const savedUser = await newUser.save();
//     console.log(savedUser);
//     return savedUser;
//   }catch(error){
//     console.error("Unable to add user")
//   }
// }
// addUser({fullname:"Paras Arya",username:"parasarya"});

// addRestaurantReviewAndRating("650841eceedb83334fd43491")

// removeDishFromMenu("650841eceedb83334fd43491","Cheese Cake")

// addDishToMenu("650841eceedb83334fd43491",{name:"Cheese Cake",price:499,description:"Cheesy chees cake",isVeg:true})

// filterRestaurantsByRating(4.1)
// searchRestaurantsByLocation("Gwalior")

// deleteRestaurant("650841f5c7c3b63961e7cccf")

// createRestaurant({
//   name:"Params",
// cuisine:"Bakery",
// address: "Line 1 Sector-2",
// city: "Gwalior",
// rating:4,
// menu:[{name:"Allo patties",price:30,description:"Crispy outer layer filled with masaledar potato",isVeg:true}],
// averageRating:4.5
// })

// readAllRestaurant()
// updateRestaurant("650841f5c7c3b63961e7cccf",{name:"Joe's Bakery"})