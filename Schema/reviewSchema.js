const mongoose = require('mongoose')
const reviewSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true 
    }
})


module.exports = reviewSchema