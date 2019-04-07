const BookInstance = require('../models/bookinstance');

module.exports = {
  bookinstanceList: (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance list');
  },
  bookinstanceDetail: (req, res) => {
    res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
  },
  bookinstanceCreateGet: (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
  },
  bookinstanceCreatePost: (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
  },
  bookinstanceDeleteGet: (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
  },
  bookinstanceDeletePost: (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
  },
  bookinstanceUpdateGet: (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
  },
  bookinstanceUpdatePost: (req, res) => {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
  }
};