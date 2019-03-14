/* eslint-disable no-console */
const mongoose = require('mongoose');
const {
  address,
  company,
  date,
  image,
  lorem,
  name,
} = require('faker');
const { Reviews } = require('./schema.noSQL');

const random = max => (Math.floor(Math.random() * max));
const randomBoolean = () => ((Math.floor(Math.random() * 2) === 1));

const reviewInput = (input) => {
  const obj = {};
  obj.date = date.past();
  obj.check_in = randomBoolean();
  obj.stars = random(10);
  obj.language = lorem.word();
  obj.review = lorem.paragraph(3);
  obj.useful = random(5);
  obj.funny = random(5);
  obj.cool = random(5);
  obj.user = [];
  obj.ownerFb = [];

  const objUser = {};
  objUser.name = `${name.firstName()} ${name.lastName()}`;
  objUser.self_pic = image.people(75, 75);
  objUser.location = address.city();
  objUser.friend_count = random(65);
  objUser.review_count = random(350);
  objUser.photo_count = random(50);
  objUser.elite_status = randomBoolean();
  obj.user.push(objUser);

  if (input === 5) {
    const objOwner = {};
    objOwner.name = `${name.firstName()} ${name.lastName()}`;
    objOwner.self_pic = image.people(75, 75);
    objOwner.title = name.jobTitle();
    objOwner.date = date.past();
    objOwner.review = lorem.sentence();
    obj.ownerFb.push(objOwner);
  }
  return obj;
};

mongoose.connect('mongodb://localhost:27017/review', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  const promise = [];
  for (let i = 0; i <= 9; i += 1) {
    const review = [];
    for (let j = 0; j <= 3; j += 1) {
      review.push(reviewInput(i));
    }
    const reviews = new Reviews({
      id: 1,
      restaurant_name: company.companyName(),
      review,
    });
    promise.push(reviews.save());
  }
  Promise.all(promise)
    .then(() => {
      console.log('Saved all data into database');
      db.close();
      console.log('Connection has now closed');
    })
    .catch((err) => {
      console.log(err);
    });
});
