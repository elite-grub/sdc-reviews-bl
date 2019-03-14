const Sequelize = require('sequelize');
const { development } = require('./config.file');

const sequelize = new Sequelize({
  host: development.host,
  username: development.username,
  password: development.password,
  database: 'reviews',
  dialect: 'postgres',
  logging: false,
});


const Restaurant = sequelize.define('restaurants', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  star_rank: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, { timestamps: false }, { freezeTableName: true });

const Review = sequelize.define('reviews', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  check_in: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  review: {
    type: Sequelize.STRING(1234),
    allowNull: true,
  },
  star: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  language: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  vote_useful: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  vote_funny: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  vote_cool: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

}, { timestamps: false }, { freezeTableName: true });

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  self_pic: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  friend_count: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  review_count: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  photo_count: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  elite_status: {
    type: Sequelize.BOOLEAN,
  },
}, { timestamps: false }, { freezeTableName: true });

const Owner = sequelize.define('owners', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  self_pic: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  review: {
    type: Sequelize.STRING(1234),
  },
}, { timestamps: false }, { freezeTableName: true });

Restaurant.hasMany(Review, { constraints: false });
Review.hasOne(User, { constraints: false });
Owner.hasMany(Review, { constraints: false });
// Review.belongsTo(Restaurant);
// Review.belongsTo(User);

module.exports = {
  sequelize,
  Restaurant,
  Review,
  User,
  Owner,
};
