const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String,
  year: Number,
  author: String,
});

module.exports = mongoose.model('book', bookSchema);
