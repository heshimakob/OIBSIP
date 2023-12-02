const express=require("express");
const dotenv=require('dotenv')
const connectDB=require('./config/config');
require("colors");
const morgan=require("morgan");
const { bgGreen } = require("colors");


dotenv.config()


connectDB()

const app=express()


app.use(express.json())
app.use(morgan("dev"))

app.get('/',(req,res)=>{
    res.send("<h1>Hello from our server nodemon</h1>");
});

const port =process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`Server running  on ${process.env.NODE_ENV} mode on ${process.env.PORT} `.bgGreen.white);
});