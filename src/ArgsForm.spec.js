import React from 'react';
import { shallow } from 'enzyme';
import ArgsForm from './ArgsForm';

it('sets argValues', () => {
  const wrapper = shallow(<ArgsForm args={[]}/>);
  const argsForm = wrapper.instance();
  argsForm.argValueChange(["foo"], "bar");
  expect(wrapper.state().argValues.foo).toEqual("bar")
});

it('sets nested argValues', () => {
  const wrapper = shallow(<ArgsForm args={[]}/>);
  const argsForm = wrapper.instance();
  argsForm.argValueChange(["foo", 'baz'], "bar");
  argsForm.argValueChange(['foo', 'bing', 'wuzza'], 'donk');
  expect(wrapper.state().argValues.foo.baz).toEqual("bar")
  expect(wrapper.state().argValues.foo.bing.wuzza).toEqual("donk")
});
