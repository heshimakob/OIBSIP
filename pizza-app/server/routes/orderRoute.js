const express =require('express');
const { token } = require('morgan');
const router = express.Router()
const {v4:uuidv4}=require('uuid');
const stripe =require('stripe')('sk_test_51OKwNHI6LpqwViK1pwJZCWkNZ2EZZCTXF8j52ny2Z14SO8kvGEI50CW2n83f6nburUR3Jwkdpyjwl80r9q6TD9U4001xbXsmKF');
const  order =require('../models/orderModel')
router.post('/placeorder',async(req,res)=>{
    const {token,subTotal,currentUser,cartItems}=req.body
    try {
        const customer= await stripe.customers.create({
            email:token.email,
            source:token.id
        })
        const payment=await stripe.charges.create({
            amount:subTotal*100,
            currency:'usd',
            customer:customer.id,
            receipt_email:token.email
        },{
            idempotencyKey: uuidv4()
        })
        if (payment){
            const newOrder= new order({
                name:currentUser.name,
                email:currentUser.email,
                userid:currentUser._id,
                orderItems:currentUser,
                orderAmount:subTotal,
                shippingAddress:{
                    street:token.card.address_line1,
                    city:token.card.address_city,
                    country:token.card.address_country,
                    picode:token.card.address_zip,
                },
                transectionId:payment.source.id



            });
            newOrder.save()
            res.send('paymnet success')
        }
        else{
            res.send('payement fail')
        }
        
    } catch (error) {
        res.status(400).json({
            message:'wrong echece',
            error:error.stack
        })
    }
 
})
module.exports=router;