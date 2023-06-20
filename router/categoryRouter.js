const mongoose = require('mongoose')
const express = require('express')
const categorySchema = require('../Schema/categorySchema')
const productsSchema = require('../Schema/productsSchema')
const category = new mongoose.model('Category',categorySchema)
const products = new  mongoose.model("products",productsSchema)
const router = express.Router()

    router.post('/',async(req,res)=>{
        const myCategory = category(req.body)
        try{
            const result = await myCategory.save()
            res.status(200).json({"result":result})
        }
        catch(error){
            res.status(500).json({"error":error.message})
        }
    })

    router.get('/',async(req,res)=>{
        try{
            const allCategory = await category.find({})
            res.status(200).json(allCategory)
        }
        catch(error){
            res.status(500).json({"error":error.message})
        }
    })

    router.get('/:category', async (req, res) => {
        try{
            const query = req.params.category 
            const result = await products.find({category:query})
            res.status(200).json(result)
        }
        catch(error){
            res.status(500).json({"error":error.message})
        }
      });
 


module.exports = router