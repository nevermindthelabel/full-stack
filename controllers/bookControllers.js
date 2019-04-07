const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');
const async = require('async');

// async.parallel({
//   bookCount: (cb => {
//     Book.countDocuments({}, cb);
//   }),
//   bookInstanceCount: (cb => {
//     BookInstance.countDocuments({}, cb)
//   }),
//   bookInstanceAvailableCount: (cb => {
//     BookInstance.countDocuments({ status: 'Available'}, cb)
//   }),
//   authorCount: (cb => {
//     Author.countDocuments({}, cb)
//   }),
//   genreCount: (cb => {
//     Genre.countDocuments({}, cb)
//   }),
//   function (err, results) {
//     results.send('NOT IMPLEMENTED')
//   }
// })

module.exports = {
  index: (req, res) => {
    res.send('NOT IMPLEMENTED: Home page')
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