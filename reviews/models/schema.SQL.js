const Sequelize = require('sequelize');
const { development } = require('./config.file');

const sequelize = new Sequelize({
  host: development.host,
  username: development.username,
  password: development.password,
  database: 'allreviews',
  dialect: 'postgres',
});

module.exports = {
  Restaurant: sequelize.define('restaurants', {
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
  }, { timestamps: false }, { freezeTableName: true }),

  Review: sequelize.define('reviews', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    check_in: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    review: {
      type: Sequelize.STRING(1234),
      allowNull: false,
    },
    star: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    owner_fb: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    owner_fb_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    language: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    vote_useful: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    vote_funny: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    vote_cool: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    restaurant_id: {
      type: Sequelize.INTEGER,
      reference: this.Restaurant,
      key: 'id',
    },
    user_id: {
      type: Sequelize.INTEGER,
      reference: this.User,
      key: 'id',
    },
    photo_id: {
      type: Sequelize.INTEGER,
      reference: this.Photo,
      key: 'id',
    },
  }, { timestamps: false }, { freezeTableName: true }),

  User: sequelize.define('users', {
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
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    photo_count: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    elite_status: {
      type: Sequelize.BOOLEAN,
    },
  }, { timestamps: false }, { freezeTableName: true }),

  Owner: sequelize.define('owners', {
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
  }, { timestamps: false }, { freezeTableName: true }),

  Photo: sequelize.define('photos', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    photos: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
  }, { timestamps: false }, { freezeTableName: true }),
};

module.exports.sequelize = sequelize;
