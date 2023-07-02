// const mongoose = require('mongoose');
// const express = require('express');
// const wishlistSchema = require('../Schema/wishlistSchema');
// const wishlist = new mongoose.model('wishlist',wishlistSchema);
// const router = express.Router()

//     router.post('/',async(req,res)=>{
//         const wishlistdata = wishlist(req.body)
//         try{
//             const myWishlist = await wishlistdata.save()
//             res.status(200).json(myWishlist)
//         }
//         catch(error){
//             res.status(500).json({ "error": error.message })
//         }
//     })

//     router.get('/:email',async(req,res)=>{
//         const email = req.params.email
//         console.log(email)
//         try{
//             const query = {email:email}
//             const mydata = await wishlist.find(query)
//             console.log(mydata)
//             res.status(200).json(mydata)
//         }
//         catch(error){
//             res.status(500).json({ "error": error.message })
//         }
//     })


// module.exports = router 