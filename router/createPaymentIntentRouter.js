const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const stripe = require("stripe")(process.env.PAYEMNT_KEY);
const paymentSchema = require('../Schema/PaymentSchema');
const payment = new mongoose.model("payment", paymentSchema)
const router = express.Router()


router.post('/', async (req, res) => {

    const { price } = payment(req.body)
    const amount = price * 100
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
    });
    res.send({
        clientSecret: paymentIntent.client_secret
    })
})


module.exports = router 