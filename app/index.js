'use strict';

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  return res.status(200).send('ok');
});

const server = app.listen(app.get('port'), (err) => {
  if (err) throw err
  console.log(`App listening on http://localhost:${server.address().port}`)
})

// const server = app.listen(3000, (err) => {
//   if (err) throw err;
//   console.log(`App listening on localhost:3000`);
// })

 module.exports = app;
