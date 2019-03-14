const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { allReviews } = require('../models/index.js');

const app = express();
const port = 3010;
const pathToAssets = path.join(__dirname, '../client/dist');
const staticAssets = express.static(pathToAssets);

app.use(staticAssets);
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// // HANDLE GET REQUEST FOR ALL BULK OF REVIEWS
// app.get('/api/reviews', (req, res) => {
//   res.send('yay bulk get works').sendStatus(200);
// });

// // HANDLE GET REQUEST TO READ A SPECIFIC REVIEW
// app.get('/api/reviews/:review_id', (req, res) => {
//   const id = req.params.review_id;
//   res.send('yay get works').sendStatus(200);
// });

// // HANDLE POST REQUEST TO CREATE A SPECIFIC REVIEW
// app.post('/api/reviews/:review_id', (req, res) => {
//   const id = req.params.review_id;
//   res.send('yay post works').sendStatus(201);
// });

// // HANDLE PUT REQUEST TO UPDATE A SPECIFIC REVIEW
// app.put('/api/reviews/:review_id', (req, res) => {
//   const id = req.params.review_id;
//   res.send('yay put works').sendStatus(201);
// });

// // HANDLE DELETE REQUEST TO DELETE A SPECIFIC REVIEW
// app.delete('/api/reviews/:review_id', (req, res) => {
//   const id = req.params.review_id;
//   res.send('yay delete works').sendStatus(200);
// });

app.get('/', (req, res) => {
  res.send('app.get working');
});

app.get('/api/reviews/:id', (req, res) => {
  const { id } = req.params;

  allReviews(id, (err, data) => (err
    ? res.sendStatus(400)
    : res.send(data)));
});

app.listen(port, () => console.log(`listening on port ${port}`));
