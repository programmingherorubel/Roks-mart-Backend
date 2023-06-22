const mongoose = require('mongoose');
const express = require('express');
const navigationSchema = require('../Schema/navigationSchema');
const navigation = new mongoose.model("navigation",navigationSchema)
const router = express.Router()

     // post method 
     router.post('/',async(req,res)=>{
        const navigationInfo = navigation(req.body);
            try{
                const singleNavigation = await navigationInfo.save()
                res.status(200).json({"result":singleNavigation})
            }
            catch(error){
                res.status(500).json({"error":error.message})
            }
    })

    // get method  
    router.get('/',async(req,res)=>{
        try{
            const navigationData = await navigation.find({})
            res.status(200).json({"navigation":navigationData})
        }
        catch(error){
            res.status(500).json({"error":error.message})
        }
    })






module.exports = router 