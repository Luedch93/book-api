const Express = require('express');
const BookModel = require('./models/books');

const app = Express();

app.use(Express.json());

app.get('/', async (req, res) => {
  const books = await BookModel.find({});
  res.send(books);
});

app.get('/:id', async (req, res) => {
  const { id } = req.params;
  const book = await BookModel.findById(id);
  res.send(book);
});

app.post('/', async (req, res) => {
  const book = req.body;
  const response = await BookModel.create(book);
  res.status(201).send(response);
});

app.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const book = await BookModel.findByIdAndDelete(id);
  res.send(book);
});

module.exports = app;
