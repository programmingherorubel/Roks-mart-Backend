const mongoose = require('mongoose');
const paymentSchema = mongoose.Schema({
    price:{
        type:Number,
        required:true
    }
})


module.exports = paymentSchema