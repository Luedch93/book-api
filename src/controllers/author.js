const AuthorModel = require('../models/author');

module.exports = {
  async create(body) {
    const author = new AuthorModel(body);
    const response = await author.save();
    return response;
  },
  async getById(id) {
    const author = await AuthorModel.findById(id);
    return author;
  },
  async getAll() {
    const authors = await AuthorModel.find();
    return authors;
  },
  async delete(id) {
    const response = await AuthorModel.findByIdAndDelete(id);
    return response;
  },
};
