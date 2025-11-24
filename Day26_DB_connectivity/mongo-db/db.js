const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB database successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
