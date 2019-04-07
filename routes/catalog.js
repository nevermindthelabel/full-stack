const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookControllers');
const authorController = require('../controllers/authorControllers');
const genreController = require('../controllers/genreController');
const bookInstanceController = require('../controllers/bookInstanceController');

router.get('/', bookController.index);
router.get('/book/create', bookController.bookCreateGet);
router.post('/book/create', bookController.bookCreatePost);
router.get('/book/:id/delete', bookController.bookDeleteGet);
router.post('/book/:id/delete', bookController.bookDeletePost);
router.get('/book/:id/update', bookController.bookUpdateGet);
router.post('/book/:id/update', bookController.bookUpdatePost);
router.get('/book/:id', bookController.bookDetail);
router.get('/books', bookController.bookList);

router.get('/author/create', authorController.authorCreateGet);
router.post('/author/create', authorController.authorCreatePost);
router.get('/author/:id/delete', authorController.authorDeleteGet);
router.post('/author/:id/delete', authorController.authorDeletePost);
router.get('/author/:id/update', authorController.authorUpdateGet);
router.post('/author/:id/update', authorController.authorUpdatePost);
router.get('/author/:id', authorController.authorDetail);
router.get('/authors', authorController.authorList);

router.get('/genre/create', genreController.genreCreateGet);
router.post('/genre/create', genreController.genreCreatePost);
router.get('/genre/:id/delete', genreController.genreDeleteGet);
router.post('/genre/:id/delete', genreController.genreDeletePost);
router.get('/genre/:id/update', genreController.genreUpdateGet);
router.post('/genre/:id/update', genreController.genreUpdatePost);
router.get('/genre/:id', genreController.genreDetail);
router.get('/genres', genreController.genreList);

router.get('/bookinstance/create', bookInstanceController.bookinstanceCreateGet);
router.post('/bookinstance/create', bookInstanceController.bookinstanceCreatePost);
router.get('/bookinstance/:id/delete', bookInstanceController.bookinstanceDeleteGet);
router.post('/bookinstance/:id/delete', bookInstanceController.bookinstanceDeletePost);
router.get('/bookinstance/:id/update', bookInstanceController.bookinstanceUpdateGet);
router.post('/bookinstance/:id/update', bookInstanceController.bookinstanceUpdatePost);
router.get('/bookinstance/:id', bookInstanceController.bookinstanceDetail);
router.get('/bookinstances', bookInstanceController.bookinstanceList);

module.exports = router;
