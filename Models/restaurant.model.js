const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name:String,
cuisine:String,
address: String,
city: String,
rating:{
  type:Number,
  min:0,
  max:5,
  default:0
},
menu:[{name:String,price:Number,description:String,isVeg:Boolean}],
  reviews: [
    {
      rating: Number,
      text: String,
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  ],
averageRating:{
  type:Number,
  default:0
}
})

const Restaurant = mongoose.model("Restaurant",restaurantSchema)

module.exports = Restaurant;