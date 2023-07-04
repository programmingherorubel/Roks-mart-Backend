const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    role:{
        type:String
    }
})

module.exports = userSchema