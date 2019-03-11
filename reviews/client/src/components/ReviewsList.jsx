import React from 'react';
import ReviewsListEntry from './ReviewsListEntry.jsx';
import style from '../../dist/styles.css';

// Helper function for random inclusive number
const getRandomInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ReviewsList = ({reviews}) => {
  return (
    <div>
      <div
        className='bodyContainer'>
        <div
          className='headerContainer'>
          <div
            className='headerTextContainer'>
            <div
              className='recommendedReviews'>
              Recommended Reviews
            </div>
            <div
              className='forCurrentRestaurant'>
              for {''}
              Fog Harbor Fish House
            </div>
          </div>
          <div
            className='searchAndSortContainer'>
            <div
              className='searchBarContainer'>
              <input
                className='searchBar'
                type='text'
                defaultValue=' Search within the reviews'
              />
              <img
                className='searchButton'
                src={reviews[0].collateral.searchIcon}>
              </img>
            </div>
            <div
              className='sortAndLanguageContainer'>
              <div
                className='sortContainer'>
                <div>
                  <select
                    className='sortDropDown'>
                    <option
                      defaultValue='yelp'>
                      Sort by Yelp Sort
                    </option>
                    <option
                      value='newest'>
                      Newest First
                    </option>
                    <option
                      value='oldest'>
                      Oldest First
                    </option>
                    <option
                      value='highest'>
                      Highest Rated
                    </option>
                    <option
                      value='lowest'>
                      Lowest Rated
                    </option>
                  </select>
                </div>
              </div>
              <div
                className='languageContainer'>
                <div>
                  <select
                    className='languageDropDown'>
                    <option
                      defaultValue='english'>
                      Language English ({getRandomInclusive(3000, 5500)})
                    </option>
                    <option
                      value='secondLanguage'>
                      {reviews[0].languages}
                    </option>
                    <option
                      value='thirdLanguage'>
                      {reviews[1].languages}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr
          className='belowHeaderLine'>
        </hr>
        <div>
          <ReviewsListEntry
            reviews={reviews}
          />
        </div>
      </div>
    </div>
  )
}

export default ReviewsList;