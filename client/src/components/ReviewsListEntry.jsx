import React from 'react';
import '../../dist/styles.css';

let id = 1

const getRandomInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ReviewsListEntry = ({reviews}) => {
  return (
    <div>
      <ul
        className='allReviewsContainer'>
        <li
          className='emptyDefaultContainer'
          key={id++}>
          <div
            className='emptyAvatarContainer'>
            <div
              className='emptyProfile'>
              {<img
                className='emptyProfileImg'
                src={reviews[0].collateral.emptyProfile}
              />}
            </div>
            <div
              className='emptyStartReviewContainer'>
              <div
                className='emptyStarsContainer'>
                {<img
                  className='emptyStars'
                  src={reviews[0].collateral.emptyStarsIcon}>
                </img>}
              </div>
              <hr
                className='belowEmptyProfileLine'>
              </hr>
              <div
                className='startReviews'>
                Start your review of {''}
                <strong>
                  Fog Harbor Fish House
                </strong>
              </div>
            </div>
          </div>
        </li>
        <hr
          className='horizontalDivider'>
        </hr>
        {reviews && reviews.map(review => (
          <li
            className='eachReviewLinkedList'
            key={id++}>
            <div
              className='eachReviewContainer'>
              <div
                className='reviewSidebarContentContainer'>
                <div
                  className='profileContainer'>
                  <div
                    className='avatarContainer'>
                      {<img
                        src={review.user.avatar}
                        className='avatar'
                      />}
                  </div>
                  <div
                    className='detailsContainer'>
                    <ul
                      className='userInfoContainer'>
                      <li
                        key={id++}>
                        <span
                          className='userName'>
                          {review.user.name}
                        </span>
                      </li>
                      <li
                        className='locationInfo'
                        key={id++}>
                        {review.user.location}
                      </li>
                    </ul>
                    <ul
                      className='userStatsContainer'>
                      <li
                        className='friendCount'
                        key={id++}>
                        {<img
                          className='friendsIcon'
                          src={reviews[0].collateral.friendsIcon}>
                        </img>}
                        {' '}
                        <span
                          className='numberOfFriends'>
                          {review.user.friends}
                        </span>
                        {' '} friends
                      </li>
                      <li
                        className='reviewCount'
                        key={id++}>
                        {<img
                          className='reviewsIcon'
                          src={reviews[0].collateral.reviewsStarsIcon}>
                        </img>}
                        {' '}
                        <span
                          className='numberOfReviews'>
                          {review.user.otherReviews}
                        </span>
                        {' '} reviews
                      </li>
                      <li
                        className='photoCount'
                        key={id++}>
                        {<img
                          className='cameraIcon'
                          src={reviews[0].collateral.cameraIcon}>
                        </img>}
                        {' '}
                        <span
                          className='numberOfPhotos'>
                          {review.user.photos}
                        </span>
                        {' '} photos
                      </li>
                      {review.user.isElite === true &&
                        <li
                          className='isElite'
                          key={id++}>
                          Elite '{review.user.elite}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
                <ul
                  className='profileLinksContainer'>
                  <li
                    className='shareReviewLink'
                    key={id++}>
                    {<img
                      className='shareReviewIcon'
                      src={reviews[0].collateral.shareReviewIcon}>
                    </img>}
                    <p
                      className='shareReviewText'>
                      Share review
                    </p>
                    <hr
                      className='shareReviewLine'>
                    </hr>
                  </li>
                  <li
                    className='embedReviewLink'
                    key={id++}>
                    {<img
                      className='embedReviewIcon'
                      src={reviews[0].collateral.embedReviewIcon}>
                    </img>}
                    <p
                      className='embedReviewText'>
                      Embed review
                    </p>
                    <hr
                    className='embedReviewLine'>
                    </hr>
                  </li>
                  <li
                    className='complimentLink'
                    key={id++}>
                    {<img
                      className='complimentIcon'
                      src={reviews[0].collateral.complimentIcon}>
                    </img>}
                    <p
                      className='complimentText'>
                      Compliment
                    </p>
                    <hr
                    className='complimentLine'>
                    </hr>
                  </li>
                  <li
                    className='sendMessageLink'
                    key={id++}>
                    {<img
                      className='sendMessageIcon'
                      src={reviews[0].collateral.sendMessageIcon}>
                    </img>}
                    <p
                      className='sendMessageText'>
                      Send message
                    </p>
                    <hr
                    className='sendMessageLine'>
                    </hr>
                  </li>
                  <li
                    className='followUserLink'
                    key={id++}>
                    {<img
                      className='followIcon'
                      src={reviews[0].collateral.followIcon}>
                    </img>}
                    <p
                      className='followText'>
                      Follow {review.user.name}
                    </p>
                  </li>
                </ul>
              </div>
              <div
                className='reviewContentContainer'>
                <div
                  className='reviewStarsContainer'>
                  {<img
                    className='reviewStars'
                    src={reviews[0].collateral.fiveStarsIcon}>
                  </img>}
                  <span
                    className='reviewDate'>
                  {review.date}
                  </span>
                </div>
                <p
                  className='userReview'>
                  {review.review}
                </p>
                <div
                  className='reviewFooterContainer'>
                  <div
                    className='didVoteContainer'>
                    {review.wasThisReview === true &&
                      <div
                        className='didVoteText'>
                        <p
                          className='nameAndOthers'>
                          {review.nameAndOthers} and {getRandomInclusive(1, 5)} others
                          {' '}
                        </p>
                        <p>
                          voted for this review
                        </p>
                      </div>
                    }
                  </div>
                  <div>
                    {review.wasThisReview === false &&
                      <p
                        className='wasThisReviewQuestion'>
                        <strong>
                          Was this review ...?
                        </strong>
                      </p>
                    }
                  </div>
                  <ul
                    className='votingButtonsContainer'>
                    <li
                      className='votingButtonContainer'
                      key={id++}>
                      {<img
                        className='usefulIcon'
                        src={reviews[0].collateral.usefulIcon}>
                      </img>}
                      {' '}
                      <div
                        className='voteType'>
                        <strong>
                          Useful
                        </strong>
                      </div>
                      {' '}
                      <div
                        className='voteCount'>
                        {getRandomInclusive(1, 5)}
                      </div>
                    </li>
                    <li
                      className='votingButtonContainer'
                      key={id++}>
                      {<img
                        className='funnyIcon'
                        src={reviews[0].collateral.funnyIcon}>
                      </img>}
                      {' '}
                      <div
                        className='voteType'>
                        <strong>
                          Funny
                        </strong>
                      </div>
                      {' '}
                      <div
                        className='voteCount'>
                        {getRandomInclusive(1, 5)}
                      </div>
                    </li>
                    <li
                      className='votingButtonContainer'
                      key={id++}>
                      {<img
                        className='coolIcon'
                        src={reviews[0].collateral.coolIcon}>
                      </img>}
                      {' '}
                      <div
                        className='voteType'>
                        <strong>
                          Cool
                        </strong>
                      </div>
                      {' '}
                      <div
                        className='voteCount'>
                        {getRandomInclusive(1, 5)}
                      </div>
                    </li>
                  </ul>
                </div>
                {review.commentFromOwner === true &&
                  <div
                    className='businessOwnerReplyContainer'>
                    <div
                      className='businessOwnerHeaderContainer'>
                      <div
                        className='businessOwnerAvatarContainer'>
                        <div
                          className='businessOwnerAvatar'>
                          {<img
                            src={review.ownerReview.avatar}
                            className='businessAvatar'
                          />}
                        </div>
                      </div>
                      <div
                        className='businessOwnerHeader'>
                        <strong>
                          Comment from {review.ownerReview.name} of {reviews[0].restaurantName}
                        </strong>
                        <br/>
                        {reviews[0].ownerReview.title}
                      </div>
                    </div>
                    <div
                      className='ownerReviewContainer'>
                      <span>
                        {review.ownerReview.date} {review.user.name}
                        <p
                          className='ownerReviewText'>
                          {review.ownerReview.review}
                        </p>
                      </span>
                    </div>
                  </div>
                }
              </div>
            </div>
            <hr
              className='horizontalDivider'>
            </hr>
          </li>
        ))}
      </ul>
      <div>
        {<img
          className='morePages'
          src={reviews[0].collateral.morePagesFooter}>
        </img>}
      </div>
    </div>
  )
}

export default ReviewsListEntry;