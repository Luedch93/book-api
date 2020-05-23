const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: String,
  birthDate: Date,
  country: String,
  gender: String,
});

module.exports = mongoose.model('author', authorSchema);
