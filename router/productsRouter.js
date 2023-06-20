const mongoose = require('mongoose');
const express = require('express');
const productsSchema = require('../Schema/productsSchema');
const products = new  mongoose.model("products",productsSchema)
const router = express.Router()

// post method 

router.post('/',async(req,res)=>{
    const myproduct = products(req.body)
    try{
        const product  = await myproduct.save()
        res.status(200).json({result:product})
    }
    catch(error){
        res.status(500).json({"error":error.message})
    }
})


// get method 
router.get('/:title', async (req, res) => {
    try {
      const title = req.params.title;
      
      if (title === 'all') {
        const allData = await products.find({});
        res.status(200).json(allData);
      } else {
        const query = { category: title };
        const filteredData = await products.find(query);
        res.status(200).json(filteredData);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router