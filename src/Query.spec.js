import React from 'react';
import { shallow, mount } from 'enzyme';
import { Query } from './Query';

it('renders the query name', () => {
  const params = { queryName: "foo" }
  const queryField = { args: []};
  const wrapper = mount(<Query params={params} queryField={queryField}/>);
  expect(wrapper.text()).toContain("foo");
});
