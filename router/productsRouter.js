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


// get method 
router.get('/', async (req, res) => {
    try {
        const { title, filter } = req.query;
      
        if (title === 'all') {
            const allData = await products.find({}).sort(filter === 'hightolow' && { price: -1 } || filter === 'lowtohigh' && { price: 1 });
            res.status(200).json(allData);
        } else {
            const query = { category: title };
            const filteredData = await products.find(query).sort(filter === 'hightolow' && { price: -1 } || filter === 'lowtohigh' && { price: 1 });
            res.status(200).json(filteredData);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
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