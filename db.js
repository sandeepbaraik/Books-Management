const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const DB = 'mongodb+srv://sandeepbaraik:Aaronprime22@cluster0.616eaco.mongodb.net/Book'
    await mongoose.connect(DB);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;