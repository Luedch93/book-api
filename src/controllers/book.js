const BookModel = require('../models/books');

module.exports = {
  async create(body) {
    const book = new BookModel(body);
    const response = await book.save();
    return response;
  },
  async getById(id) {
    const book = await BookModel.findById(id);
    return book;
  },
  async getAll() {
    const books = await BookModel.find();
    return books;
  },
  async delete(id) {
    const response = await BookModel.findByIdAndDelete(id);
    return response;
  },
};
