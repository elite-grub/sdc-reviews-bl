import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import ReviewsListEntry from '../client/src/components/ReviewsListEntry.jsx';
import 'isomorphic-fetch';

describe('<ReviewsListEntry />', () => {

  it('should have no typos for multiple className votingButtonContainer', () => {
    const wrapper = mount(<ReviewsListEntry />);
    expect(wrapper.find('.votingButtonContainer').every('.votingButtonContainer')).toEqual(true);
  });

  it('should contain allReviewsContainer', () => {
    const wrapper = mount(<ReviewsListEntry />);
    expect(wrapper.exists('.allReviewsContainer')).toEqual(true);
  });

  it('should follow camelCase format', () => {
    const wrapper = mount(<ReviewsListEntry />);
    expect(wrapper.find('.all-reviews-container').exists()).toEqual(false);
  });
});