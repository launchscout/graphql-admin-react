import React from 'react';
import { shallow } from 'enzyme';
import InputObjectArgField from './InputObjectArgField';
import SimpleArgField from './SimpleArgField';

const inputObjectArg = {
  name: "Foo",
  type: {
    kind: "INPUT_OBJECT",
    name: "FooInput"
  }
};

const schema = {
  types: [{
    name: "FooInput",
    inputFields: [
      {
        name: "bar",
        type: {
          kind: "SCALAR"
        }
      },
      {
        name: "baz",
        type: {
          kind: "SCALAR"
        }
      }
    ]
  }]
};


it('renders input objects', () => {
  const wrapper = shallow(<InputObjectArgField arg={inputObjectArg} schema={schema} />);
  expect(wrapper.find(SimpleArgField).length).toEqual(2);
});
