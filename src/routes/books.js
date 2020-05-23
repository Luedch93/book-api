const { Router } = require('express');

const bookController = require('../controllers/book');
const authorController = require('../controllers/author');

const router = Router();

router.get('/', async (req, res) => {
  const books = await bookController.getAll();
  res.send(books);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const book = await bookController.getById(id);
  res.send(book);
});

router.post('/', async (req, res) => {
  const { author, ...book } = req.body;
  const responseAuthor = await authorController.create(author);
  const response = await bookController.create({ ...book, author: responseAuthor._id });
  res.status(201).send(response);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const book = await bookController.delete(id);
  res.send(book);
});

module.exports = router;
