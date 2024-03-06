const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database is Connected");
  } catch (error) {
    console.log(`Mongoose Error {error}`);
  }
};

module.exports = connectDB;
