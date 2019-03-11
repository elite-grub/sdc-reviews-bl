const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { allReviews } = require('../models/index.js');
const pathToAssets = path.join(__dirname, '../client/dist');
const staticAssets = express.static(pathToAssets);
const app = express();
const port = 3010;

app.use(staticAssets);
app.use(bodyParser.json());

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.header("Access-Control-Allow-Origin", "*");
  // Request headers you wish to allow
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('app.get working');
});

app.get('/api/reviews/:id', (req, res) => {
  let id = req.params.id;

  allReviews(id, (err, data) => {
    return err ?
    res.sendStatus(400) :
    res.send(data);
  });
});

app.listen(port, () =>
  console.log(`listening on port ${port}`)
);