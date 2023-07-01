const mongoose = require('mongoose')
const paymentinformationSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    transectionid:{
        type:String,
        required:true
    },
    itemsId:{
        type:Array,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    items:{
        type:Array,
        required:true
    },
    review:{
        type:String
    }


})

module.exports = paymentinformationSchema