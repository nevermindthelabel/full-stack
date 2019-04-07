const Book = require('../models/book');

// exports.index = (req, res) => {
//   res.send('NOT IMPLEMENTED: Site Home Page');
// }

module.exports = {
  index: (req, res) => {
    res.send('NOT IMPLEMENTED: Site Home Page');
  },
  bookList: (req, res) => {
    res.send('NOT IMPLEMENTED: Book list');
  },
  bookDetail: (req, res) => {
    res.send('NOT IMPLEMENTED: Book detail');
  },
  bookCreateGet: (req, res) => {
    res.send('NOT IMPLEMENTED: Book create GET');
  },
  bookCreatePost: (req, res) => {
    res.send('NOT IMPLEMENTED: Book create POST');
  },
  bookDeleteGet: (req, res) => {
    res.send('NOT IMPLEMENTED: Book delete GET');
  },
  bookDeletePost: (req, res) => {
    res.send('NOT IMPLEMENTED: Book delete POST');
  },
  bookUpdateGet: (req, res) => {
    res.send('NOT IMPLEMENTED: Book update GET');
  },
  bookUpdatePost: (req, res) => {
    res.send('NOT IMPLEMENTED: Book update POST');
  }
};