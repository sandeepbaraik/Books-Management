const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/getAllBooks', booksController.getAllBooks);
router.get('/getBook/:id', booksController.getBookById);
router.post('/addBook', booksController.addBook);
router.put('/updateBook/:id', booksController.updateBook);
router.delete('/deleteBook/:id', booksController.deleteBook);

module.exports = router;
