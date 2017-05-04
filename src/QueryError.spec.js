import React from 'react';
import { shallow, mount } from 'enzyme';
import QueryError from './QueryError';

const queryError = {
  graphQLErrors: [
    { message: "You stink"},
    { message: "Really I mean it"}
  ]
};

it('renders the errors', () => {
  const wrapper = mount(<QueryError queryError={queryError} />);
  expect(wrapper.find('li').length).toEqual(2);
});
