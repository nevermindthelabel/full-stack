const express = require('express');
const app = express();
const PORT = process.env.PORT ||3001;

app.get('/', (req, res) => {
  res.send('you made it!');
});

app.listen(PORT, () => {
  console.log('listening');
});
