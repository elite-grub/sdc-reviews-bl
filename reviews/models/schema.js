const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  id: Number,
  user: {
    avatar: String,
    name: String,
    location: String,
    friends: String,
    otherReviews: String,
    photos: String,
    isElite: Boolean,
    elite: String,
  },
  stars: String,
  date: String,
  didCheckIn: Boolean,
  checkInStatus: String,
  review: String,
  hasPictures: Boolean,
  pictures: String,
  wasThisReview: Boolean,
  peerVoted: {
    avatar: String,
    name: String,
    thoughts: String,
  },
  thoughts: {
    useful: Number,
    funny: Number,
    cool: Number,
  },
  commentFromOwner: Boolean,
  ownerReview: {
    avatar: String,
    name: String,
    title: String,
    date: String,
    review: String,
  },
  languages: String,
  restaurantName: String,
  nameAndOthers: String,
  collateral: {
    emptyProfile: String,
    cameraIcon: String,
    complimentIcon: String,
    coolIcon: String,
    embedReviewIcon: String,
    emptyStarsIcon: String,
    fiveStarsIcon: String,
    followIcon: String,
    fourStarsIcon: String,
    friendsIcon: String,
    funnyIcon: String,
    morePagesFooter: String,
    searchIcon: String,
    shareReviewIcon: String,
    threeStarsIcon: String,
    usefulIcon: String,
    reviewsStarsIcon: String,
    sendMessageIcon: String,
    footerSiteMapIcon: String,
  }
});

const Reviews = mongoose.model('reviews', reviewsSchema);

module.exports = {
  Reviews
}