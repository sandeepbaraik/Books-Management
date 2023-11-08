const Book = require('../models/book');

const getAllBooks = async () => {
  try{
    return await Book.find();
  } catch(err) {
    throw new Error(err);
  }
};

const getBookById = async (id) => {
  try {
    return await Book.findById(id);
  } catch(err) {
    throw new Error(err);
  }
};

const addBook = async (title, author, summary) => {
  try{
    const book = new Book({ title, author, summary });
    return await book.save();
  } catch(err) {
    throw new Error(err);
  }
};

const updateBook = async (id, title, author, summary) => {
  try{
    return await Book.findByIdAndUpdate(id, { title, author, summary }, { new: true });
  } catch(err) {
    throw new Error(err);
  }
};

const deleteBook = async (id) => {
  try {
    return await Book.deleteOne({ "_id" : id});
  } catch(err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
