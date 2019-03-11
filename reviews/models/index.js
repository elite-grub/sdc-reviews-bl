const mongoose = require('mongoose');
const { Reviews } = require('./schema.js');
const { save } = require('./reviews.js');
mongoose.connect('mongodb://spark:sparkreviews1@ds163255.mlab.com:63255/reviews');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  save();
});

const allReviews = (id, callback) => {
  Reviews
    .aggregate([{
      $sample: {
        size: 20
      }
    }])
    .exec((err, data) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, data);
    });
};

module.exports = {
  db,
  allReviews
}