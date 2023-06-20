const mongoose = require('mongoose');
const navigationSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
})

module.exports = navigationSchema