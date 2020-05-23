const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  name: String,
  year: Number,
  author: { type: Schema.ObjectId, ref: 'author' },
});

module.exports = model('book', bookSchema);
