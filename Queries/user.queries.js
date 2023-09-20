require("../mongoDB");
const User = require("../Models/user.model.js");

const addUser = async(userData)=>{
  try{
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    console.log(savedUser);
    return savedUser;
  }catch(error){
    throw new Error("Unable to add user")
  }
}

module.exports = {addUser};





// getUserReviewsForRestaurant("65088a03173a4896a43571ca","parasarya")

// addRestaurantReviewAndRating("65088a03173a4896a43571ca",{
//   rating:4,
//   text:"Old memories",
//   user:"650888608c49fe65e80c05c5"
// })


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