const mongoose = require('mongoose');
const express = require('express');
const productsSchema = require('../Schema/productsSchema');
const products = new mongoose.model("products", productsSchema)
const router = express.Router()

// post method 



router.post('/', async (req, res) => {
    const myproduct = products(req.body)
    try {
        const product = await myproduct.save()
        res.status(200).json({ result: product })
    }
    catch (error) {
        res.status(500).json({ "error": error.message })
    }
})


router.get('/', async (req, res) => {
    try {
      const { title, filter, searchByShop } = req.query;
      
  
      let query = {};
      if(searchByShop){
        query = {name:new RegExp(searchByShop, 'i')}
      }
     
      if (title !== 'all') {
        query.category = title;
      }
  
      let sortOptions = {};

      if (filter === 'hightolow') {
        sortOptions.price = -1;

      } else if (filter === 'lowtohigh') {
        sortOptions.price = 1;
      }
 

      const filteredData = await products.find(query).sort(sortOptions);
     
      res.status(200).json(filteredData);
    } catch (error) {
      
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.get('/single/:id',async(req,res)=>{
    try{
        const id = req.params.id 
        const result = await products.findOne({_id:id})
        res.status(200).json(result);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
})

router.get('/all', async (req, res) => {
    try {
        const myProducts = await products.find({});
        res.status(200).json(myProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});








module.exports = router