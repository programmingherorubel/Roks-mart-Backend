const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

// router 
const navigationRouter = require('./router/navigationRouter')
const productsRouter = require('./router/productsRouter')
const categoryRouter = require('./router/categoryRouter')



// middelware 
const  app  = (express())
app.use(cors())
dotenv.config()
app.use(express.json())

// PORT 
const port = process.env.PORT || 9000
// connect mongoose 
mongoose.connect(process.env.MONGOOSE_ACCESS)
    .then(()=> console.log('connection successfull'))
    .catch(err => console.log(err))


// connect router 
app.use('/navigation',navigationRouter)
app.use('/products',productsRouter)
app.use('/category',categoryRouter)

app.get('/',async(req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log('app lisining port number 9000')
})