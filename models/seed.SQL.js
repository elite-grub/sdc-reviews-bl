/* eslint-disable no-console */
const {
  sequelize,
  Restaurant,
  Review,
  User,
  Owner,
  Photo,
} = require('./schema.SQL');

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
    promise.push(
      Restaurant.create({
        name: 'in Nfdsafdsa out',
        star_rank: 2,
      }),
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
      }),
      User.create({
        name: 'brian',
        self_pic: 'url link',
        location: 'hayward',
        friend_count: 3,
        review_count: [],
        photo_count: 3,
        elite_status: true,
      }),
      Owner.create({
        name: 'tom',
        title: 'manager',
        date: '2000-01-18',
        review: 'thank you for the reivew',
      }),
      Photo.create({
        photo: [],
      }),
    );
    return Promise.all(promise)
      .then(() => {
        sequelize.close();
        console.log('Data seeding complete');
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
