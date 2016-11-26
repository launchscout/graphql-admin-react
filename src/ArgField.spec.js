import React from 'react';
import { shallow } from 'enzyme';
import ArgField from './ArgField';
import InputObjectArgField from './InputObjectArgField';

const simpleArg = {
  name: "Foo",
  type: {
    kind: "SCALAR",
    name: "String"
  }
};

const inputObjectArg = {
  name: "Foo",
  type: {
    kind: "INPUT_OBJECT",
    name: "FooInput"
  }
};

const schema = {};

it('renders simple args', () => {
  const wrapper = shallow(<ArgField arg={simpleArg} schema={schema} />);
  expect(wrapper.find('input')).toBeTruthy();
});

it('renders input objects', () => {
  const wrapper = shallow(<ArgField arg={inputObjectArg} schema={schema} />);
  expect(wrapper.find(InputObjectArgField).length).toEqual(1);
});
