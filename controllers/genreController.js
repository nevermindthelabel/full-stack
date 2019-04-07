const Genre = require('../models/genre');

module.exports = {
  genreList: (req, res) => {
    res.send('NOT IMPLEMENTED: Genre list');
  },
  genreDetail: (req, res) => {
    res.send(`NOT IMPLEMENTED: Genre detail ${req.params.id}`)
  },
  genreCreateGet: (req, res) => {
    res.send('NOT IMPLEMENTED: Genre create GET');
  },
  genreCreatePost: (req, res) => {
    res.send('NOT IMPLEMENTED: Genre create POST');
  },
  genreDeleteGet: (req, res) => {
    res.send('NOT IMPLEMENTED: Genre delete GET');
  },
  genreDeletePost: (req, res) => {
    res.send('NOT IMPLEMENTED: Genre delete POST');
  },
  genreUpdateGet: (req, res) => {
    res.send('NOT IMPLEMENTED: Genre update GET');
  },
  genreUpdatePost: (req, res) => {
    res.send('NOT IMPLEMENTED: Genre update POST');
  }
};