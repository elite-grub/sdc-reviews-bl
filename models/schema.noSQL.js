const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  id: Number,
  restaurant_name: String,
  review: [
    {
      date: String,
      check_in: Boolean,
      stars: Number,
      language: String,
      review: String,
      useful: Number,
      funny: Number,
      cool: Number,
      user: [
        {
          name: String,
          self_pic: String,
          location: String,
          friend_count: Number,
          review_count: Number,
          photo_count: Number,
          elite_status: Boolean,
        },
      ],
      ownerFb: [
        {
          name: String,
          self_pic: String,
          title: String,
          date: String,
          review: String,
        },
      ],
    },
  ],


});

module.exports = {
  Reviews: mongoose.model('restaurant', restaurantSchema),
};
