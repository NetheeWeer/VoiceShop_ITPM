require ("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://it21212536:XNQkZ8UkenjX6skC@voiceshop.lrqeqzs.mongodb.net/?retryWrites=true&w=majority&appName=voiceshop"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
