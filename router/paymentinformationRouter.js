const mongoose = require('mongoose')
const express = require('express')
const paymentinformationSchema = require('../Schema/paymentinformationSchema')
const paymentDetails =new mongoose.model('PaymentDetails',paymentinformationSchema)
const router = express.Router()

    router.post('/',async(req,res)=>{
        const payment = paymentDetails(req.body)
        try{
            const product = await payment.save()
            res.status(200).json(product)
        }catch(error){
            res.status(500).json({ "error": error.message })
        }
    })

    router.get('/',async(req,res)=>{
        try{
            const paymentinfo =await paymentDetails.find({})
            res.status(200).json(paymentinfo)
        }catch(error){
            res.status(500).json({ "error": error.message })
        }
    })



module.exports = router 
