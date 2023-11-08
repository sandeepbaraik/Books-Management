const bookService = require('../services/bookService');

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(201).json(books);
  } catch(err) {
    res.status(404).json({ error: "Something went wrong" });
  }
};

const getBookById = async (req, res) => {
  try{
    const book = await bookService.getBookById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(201).json(book);
  } catch(err) {
    res.status(404).json({ error: "Something went wrong" });
  }
};

const addBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const book = await bookService.addBook(title, author, summary);
    res.status(201).json(book);
  } catch(err) {
    res.status(404).json({ error: "Something went wrong" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const book = await bookService.updateBook(req.params.id, title, author, summary);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(404).json({ error: "Something went wrong" });
  }
};

const deleteBook = async (req, res) => {
  try{
    const book = await bookService.deleteBook(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch(err) {
    res.status(404).json({ error: "Something went wrong" });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
