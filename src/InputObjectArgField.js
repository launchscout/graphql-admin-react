import React from 'react';
import { findInputFields } from './graphql_utils';
import SimpleArgField from './SimpleArgField';

const InputObjectArgField = ({arg, onChange, prefix=[], schema}) => (
  <fieldset>
  { findInputFields(schema, arg.type.name)
    .map( (inputField, index) => (
      <SimpleArgField key={index} arg={inputField} prefix={prefix.concat(arg.name)} onChange={onChange} />
    ))
  }
  </fieldset>
);

export default InputObjectArgField;
