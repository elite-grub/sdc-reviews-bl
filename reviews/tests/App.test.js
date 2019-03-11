import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import App from '../client/src/components/App.jsx';
import ReviewsList from '../client/src/components/ReviewsList.jsx';
import 'isomorphic-fetch';

describe('<App />', () => {

  it('renders one <ReviewsList /> component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.contains(ReviewsList)).toBeTruthy();
  });

  it('starts with a isLoaded state of false', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('isLoaded')).toEqual(false);
  });

  it('starts with a data state of []', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('data')).toEqual([]);
  });
});
