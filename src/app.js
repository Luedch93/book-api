const Express = require('express');

const booksRouter = require('./routes/books');
const authorRouter = require('./routes/author');

const app = Express();

app.use(Express.json());

app.use('/book', booksRouter);
app.use('/author', authorRouter);

module.exports = app;
