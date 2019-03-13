/* eslint-disable no-console */
const Sequelize = require('sequelize');
const { development } = require('./config.file');
const {
  sequelize,
  Restaurant,
  Review,
  User,
  Owner,
  Photo,
} = require('./schema.SQL');

const createdb = new Sequelize({
  host: development.host,
  username: development.username,
  password: development.password,
  database: '',
  dialect: 'postgres',
  logging: false,
});

const random = max => (Math.floor(Math.random() * max));

const restaurant = () => {
  Restaurant.create({
    name: 'in Nfdsafdsa out',
    star_rank: 2,
  });
};

const review = () => {
  Review.create({
    check_in: true,
    date: '1999-01-08',
    review: 'this place suck i am never coming abck',
    star: 5,
    owner_fb: true,
    owner_fb_id: 1,
    language: 'english',
    vote_useful: true,
    vote_funny: false,
    vote_cool: false,
  });
};

const user = () => {
  User.create({
    name: 'brian',
    self_pic: 'url link',
    location: 'hayward',
    friend_count: 3,
    review_count: 4,
    photo_count: 3,
    elite_status: true,
  });
};

const owner = () => {
  Owner.create({
    name: 'tom',
    title: 'manager',
    date: '2000-01-18',
    review: 'thank you for the reivew',
  });
};

const photoGen = () => {
  const arr = [];
  for (let j = 0; j < random(4); j += 1) {
    arr.push(`https://s3-us-west-1.amazonaws.com/elite-grub/food${random(80)}.jpg`);
  }
  return arr;
};

const photo = () => {
  Photo.create({
    photos: photoGen(),
  });
};

createdb.query('DROP DATABASE IF EXISTS reviews')
  .then(() => {
    createdb.query('CREATE DATABASE reviews;')
      .then(() => {
        createdb.close();
      })
      .then(() => {
        sequelize.authenticate()
          .then(() => {
            console.log('Connection has been established successfully.');
          })
          .catch((err) => {
            console.error('Unable to connect to the database:', err);
          });
        sequelize.sync({ force: true })
          .then(() => {
            const promise = [];
            for (let i = 0; i < 9; i += 1) {
              promise.push(restaurant(), owner(), photo());
              promise.push(review(), user());
            }
            return Promise.all(promise)
              .then(() => {
                sequelize.close();
                console.log('Data seeding complete');
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
      });
  });
