const mongoose = require('mongoose');

const uri =
  'mongodb+srv://startek591:Github123@cluster0.rqythwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
