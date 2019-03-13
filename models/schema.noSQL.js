const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  id: Number,
  restaurant_name: String,
  check_in: Boolean,
  date: String,
  stars: Number,
  language: String,
  review: String,
  votes: {
    useful: Number,
    funny: Number,
    cool: Number,
  },
  photos: [],
  owner_fb: {
    feedback: Boolean,
    name: String,
    title: String,
    self_pic: String,
    date: String,
    review: String,
  },
  user: {
    name: String,
    self_pic: String,
    location: String,
    friend_count: Number,
    review_count: Number,
    photo_count: Number,
    elite_status: Boolean,
  },
});

module.exports = {
  Reviews: mongoose.model('reviews', reviewsSchema),
};
