import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import ReviewsList from '../client/src/components/App.jsx';
import ReviewsListEntry from '../client/src/components/ReviewsListEntry.jsx';
import 'isomorphic-fetch';

describe('<ReviewsList />', () => {

  it('should render one <ReviewsListEntry /> component', () => {
    const wrapper = mount(<ReviewsList />);
    expect(wrapper.find(ReviewsListEntry)).toBeTruthy();
  });

  it('should contain the headerContainer', () => {
    const wrapper = mount(<div className='headerContainer' />);
    expect(wrapper.exists('.headerContainer')).toEqual(true);
  });

  it('should have no typos for className sortBy', () => {
    const wrapper = mount(<ReviewsList />);
    expect(wrapper.find('.sortBy').every('.sortBy')).toEqual(true);
  });

});