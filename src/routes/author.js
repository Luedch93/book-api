const { Router } = require('express');

const AuthorController = require('../controllers/author');

const router = Router();

router.get('/', async (req, res) => {
  const books = await AuthorController.getAll();
  res.send(books);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const book = await AuthorController.getById(id);
  res.send(book);
});

router.post('/', async (req, res) => {
  const response = await AuthorController.create(req.body);
  res.status(201).send(response);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const book = await AuthorController.delete(id);
  res.send(book);
});

module.exports = router;
