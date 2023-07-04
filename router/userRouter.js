const mongoose = require('mongoose');
const express = require('express');
const userSchema = require('../Schema/userSchema');
const users = mongoose.model("users", userSchema);
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const user = new users(req.body);
    const query = { email: user.email };
    const existingUser = await users.findOne(query);
    if (existingUser) {
      return res.send('User already exists');
    }
    const result = await user.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ "error": error.message });
  }
});

router.get('/',async(req,res)=>{
  try{
    const allUsers = await users.find({})
    res.status(200).json(allUsers);
  }catch(error){
    res.status(500).json({ "error": error.message });
  }
})

router.put('/admin/:email',async(req,res)=>{
  try{
      const email = req.params.email;
      console.log(email)
      const filter = {"email":email}
      const updateDoc = {$set:{role:"admin"}}
      const result = await users.updateOne(filter,updateDoc)
      res.status(200).json({"result":result})
  }
  catch(error){
      res.status(500).json({"error":error})
  }

})

router.get('/:email',async(req,res)=>{
  try{
      const email = req.params.email
      const query = {email:email}
      const user = await users.findOne(query)
      let isAdmin = false 
          if(user?.role === 'admin'){
              isAdmin = true
          }
  res.status(200).json({"admin":isAdmin})
  }
  catch(error){
      res.status(500).json({"error":error})
  }
})



module.exports = router;