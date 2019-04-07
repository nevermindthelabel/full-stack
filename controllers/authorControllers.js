const Author = require('../models/author');

module.exports= {
  authorList: (req, res) => {
    res.send('NOT IMPLEMENTED: Author List');
  },
  authorDetail: (req, res) => {
    res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
  },
  authorCreateGet: (req, res) => {
    res.send('NOT IMPLEMENTED: Author create GET');
  },
  authorCreatePost: (req, res) => {
    res.send('NOT IMPLEMENTED: Author create POST');
  },
  authorDeleteGet: (req, res) => {
    res.send('NOT IMPLEMENTED: Author delete GET');
  },
  authorDeletePost: (req, res) => {
    res.send('NOT IMPLEMENTED: Author delete POST');
  },
  authorUpdateGet: (req, res) => {
    res.send('NOT IMPLEMENTED: Author update GET');
  },
  authorUpdatePost: (req, res) => {
    res.send('NOT IMPLEMENTED: Author update POST');
  }
};