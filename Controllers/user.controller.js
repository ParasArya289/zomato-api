const {addUser} = require("../Queries/user.queries.js")
const addUserController = async(req,res) => {
  const {body} = req;
  try{
    const user = await addUser(body);
    res.status(201).json({message:"User created",user})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

module.exports = {addUserController};