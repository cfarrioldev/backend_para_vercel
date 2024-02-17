const express = require('express');
const {
  getBooks,
  getOneBook,
  postBook,
  putBook,
  deleteBook,
} = require('../controllers/book.controller');
const { isAuth } = require('../../middlewares/auth');

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getOneBook);
router.post('/',  postBook);
router.put('/:id', [isAuth], putBook);
router.delete('/:id', [isAuth], deleteBook);

module.exports = router;