
const mongoose = require("mongoose");
require('dotenv').config();
require("colors");
// const URI= "mongodb+srv://heshimakob:Kobinali%4025111950@cluster0.7s5moqn.mongodb.net/pizza-shop";
// const connectDB=async()=>{

//   try {
//     await mongoose.connect(URI);
//     console.log("server connecter".bgCyan.white)
    
//   } catch (error) {
//     console.log("echec de connexion".bgRed.white);
//     process.exit(0)
    
//   }
// }

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    const conn = await mongoose.connect(url, {
      // useUnifiedTopology: true,
      // useNewUrlParser: true,
      // useCreateIndex: true
    })
    console.log(`Database connected  ${conn.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`error: ${error.message}`.bgRed.white);
  }
};
module.exports = connectDB;
