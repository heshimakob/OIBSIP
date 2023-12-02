
const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`Database connected  ${conn.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`error: ${error.message}`.bgRed.white);
  }
};
module.exports = connectDB;
