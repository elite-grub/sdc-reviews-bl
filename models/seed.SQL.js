/* eslint-disable no-console */
const Sequelize = require('sequelize');
const {
  address,
  company,
  date,
  image,
  lorem,
  name,
} = require('faker');
const { development } = require('./config.file');
const {
  sequelize,
  Restaurant,
  Review,
  User,
  Owner,
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
const randomBoolean = () => ((Math.floor(Math.random() * 2) === 1));

const restaurant = () => {
  Restaurant.create({
    name: company.companyName(),
    star_rank: random(10),
  });
};

const review = (res) => {
  Review.create({
    check_in: randomBoolean(),
    date: date.past(),
    review: lorem.paragraph(3),
    star: random(10),
    language: lorem.word(),
    vote_useful: random(5),
    vote_funny: random(5),
    vote_cool: random(5),
    restaurantId: res,
  });
};

const reviewOwner = (num) => {
  Review.create({
    ownerId: num,
  });
};

const user = (num) => {
  User.create({
    name: `${name.firstName()} ${name.lastName()}`,
    self_pic: image.people(75, 75),
    location: address.city(),
    friend_count: random(65),
    review_count: random(350),
    photo_count: random(50),
    elite_status: randomBoolean(),
    reviewId: num,
  });
};

const owner = () => {
  Owner.create({
    name: `${name.firstName()} ${name.lastName()}`,
    self_pic: image.people(75, 75),
    title: name.jobTitle(),
    date: date.past(),
    review: lorem.sentence(),
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
            for (let i = 1; i <= 10; i += 1) {
              promise.push(restaurant());
              if (i % 5 === 0) {
                promise.push(owner(), reviewOwner(i));
              }
              for (let k = 1; k <= 3; k += 1) {
                promise.push(review(i), user(k));
              }
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
