// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Construct the MongoDB URI dynamically if it's not provided fully in .env
    const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

    console.log('Mongo URI:', mongoURI); // This is for debugging to check the full URI

    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB Atlas Cluster');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit on failure
  }
};

module.exports = connectDB;
