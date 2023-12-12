const express= require('express');
const router =express.Router();
const pizzaModel= require('../models/pizzaModel')


router.get('/getAllPizzas', async(req,res)=>{
    try {
        const pizzas =await pizzaModel.find({})
        res.send(pizzas)
        
    } catch (error) {
        res.json({message:error})
        
    }
});


router.get('/addpizza', async(req,res)=>{
    try {
        const newPizza= new pizza ({
            name:pizza.name,
            image:pizza.image,
            varients:['small','medium','larg'],
            description:pizza.category,
            prices:[pizza.prices]
        })
        
    } catch (error) {
        res.json({message:error})
        
    }
});

module.exports=router;