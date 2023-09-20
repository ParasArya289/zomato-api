const express = require('express');
const restaurantRouter = require("./Routers/restaurant.router.js");

const app = express();

app.use(express.json());

app.use("/restaurants",restaurantRouter);

app.get('/', (_, res) => {
  res.send('Zomato-api')
});

//Global error handler
app.use((_,__,___,____)=>{
  res.status(500).json({error:"Something went wrong!"})
})

//Global route middleware
app.use((_,res)=>{
  res.status(404).json({error:"Requested API Endpoint does not exist!"})
})

app.listen(3000, () => {
  console.log('server started');
});
