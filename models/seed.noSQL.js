const mongoose = require('mongoose');
const { Reviews } = require('./schema.noSQL');

mongoose.connect('mongodb://localhost:27017/reviews', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open')
  .then(() => {
    const reviews = new Reviews({
      id: 3,
      restaurant_name: '3',
      check_in: true,
      date: '1900-04-23',
      stars: 4,
      language: 'thes',
      review: '3fdjafjdka;fad',
      votes: {
        useful: 4,
        funny: 3,
        cool: 6,
      },
      photos: ['this', 'is where the', 'pics go'],
      owner_fb: {
        feedback: true,
        name: 'brian',
        title: 'SE',
        self_pic: 'testing pic',
        date: '1900-04-23',
        review: 'this is where i put my shit',
      },
      user: {
        name: 'brian',
        self_pic: 'url pic',
        location: 'yoc',
        friend_count: 4,
        review_count: 2,
        photo_count: 5,
        elite_status: 7,
      },
    })
      .then(() => {
        reviews.save()
          .then(() => console.log('Yay this works'))
          .catch(err => err);
      })
      .catch(err => err);
  });
