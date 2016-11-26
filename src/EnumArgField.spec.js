import React from 'react';
import { shallow } from 'enzyme';
import EnumArgField from './EnumArgField';

const enumArg = {
  name: "Foo",
  type: {
    kind: "ENUM",
    name: "FooEnum"
  }
};

const schema = {
  types: [
    {
      name: "FooEnum",
      kind: "ENUM",
      enumValues: [
        {
          name: "FOO"
        },
        {
          name: "BAR"
        }
      ]
    }
  ]
};

it('renders select with options', () => {
  const wrapper = shallow(<EnumArgField arg={enumArg} schema={schema} />);
  expect(wrapper.find('select').length).toEqual(1);
});
