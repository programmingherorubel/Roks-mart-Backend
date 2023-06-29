const mongoose = require('mongoose')
const express = require('express')
const billingaddressSchema = require('../Schema/billingAddressSchema')
const billingsAddress = new mongoose.model("billingsAddress",billingaddressSchema)
const router = express.Router()

    router.post('/',async(req,res)=>{
        const address = billingsAddress(req.body)
        try{
            const newAddress = await address.save()
            res.status(200).json(newAddress)
        }catch(error){
            res.status(500).json({"error":error.message})
        }
    })



module.exports = router