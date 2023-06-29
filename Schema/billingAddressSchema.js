const mongoose = require('mongoose');
const billingaddressSchema = mongoose.Schema({
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    zipcode:{
        type:String,
        required:true
    },
})




module.exports = billingaddressSchema

