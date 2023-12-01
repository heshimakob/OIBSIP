const express=require("express")
require("colors")
const morgan=require("morgan")

const app=express()


app.use(express.json())
app.use(morgan("dev"))

app.get('/',(req,res)=>{
    res.send("<h1>Hello from our server</h1>");
});

app.listen(8080,()=>{
    console.log('Server running  on port 8080');
});