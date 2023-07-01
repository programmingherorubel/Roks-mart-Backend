const mongoose = require('mongoose')
const express = require('express')
const paymentinformationSchema = require('../Schema/paymentinformationSchema')
const paymentDetails = new mongoose.model('PaymentDetails', paymentinformationSchema)
const router = express.Router()

router.post('/', async (req, res) => {
    const payment = paymentDetails(req.body)
    try {
        const product = await payment.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
})
router.get('/single/:id', async (req, res) => {
    try {
        const id = req.params.id
        const paymentinfo = await paymentDetails.find({ _id: id })
        res.status(200).json(paymentinfo)
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
})

router.get('/:email',async(req,res)=>{
    try{
        const email = req.params.email 
        const result = await paymentDetails.find({email:email})
        res.status(200).json(result)
    }
    catch(error){
        res.status(500).json({ "error": error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const result = await paymentDetails.find({})
        console.log(result)
        res.status(200).json(result)
    }
    catch (error) {
        res.status(500).json({ "error": error.message })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id };
        const updateDoc = { $set: { status: "Order Confirmed" } };
        const result = await paymentDetails.findOneAndUpdate(query, updateDoc, { new: true });
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
});
router.patch('/pending/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id };
        const updateDoc = { $set: { status: "pending" } };
        const result = await paymentDetails.findOneAndUpdate(query, updateDoc, { new: true });
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ "error": error.message });
    }
});

router.put('/on/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id };
        const updateDoc = { $set: { review: "on" } };
        const options = { upsert: true }; // Specify options separately

        const result = await paymentDetails.updateOne(query, updateDoc, options);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/off/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id };
        const updateDoc = { $set: { review: "off" } };
        const options = { upsert: true };

        const result = await paymentDetails.updateOne(query, updateDoc, options);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});









module.exports = router 
