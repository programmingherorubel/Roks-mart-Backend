const mongoose = require('mongoose')
const express = require('express')
const reviewSchema = require('../Schema/reviewSchema')
const review = new mongoose.model('review',reviewSchema)
const router = express.Router()

    router.post('/',async(req,res)=>{
        const singleReview = review(req.body)
        try{
            const productReview = await singleReview.save()
            res.status(200).json(productReview)
        }catch(error){
            res.status(500).json({ "error": error.message })
        }
    })

    router.get('/',async(req,res)=>{
        try{
            const singleReview = await review.find({})
            res.status(200).json(singleReview)
        }
        catch(error){
            res.status(500).json({ "error": error.message })
        }
    })

module.exports = router 