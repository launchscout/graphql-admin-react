import React from 'react';
import { findInputFields } from './graphql_utils';
import ArgField from './ArgField';

const InputObjectArgField = ({arg, argValueChange, prefix=[], schema}) => (
  <fieldset>
  { findInputFields(schema, arg.type.name)
    .map( (inputField, index) => (
      <ArgField key={index} arg={inputField} prefix={prefix.concat(arg.name)} argValueChange={argValueChange} />
    ))
  }
  </fieldset>
);

export default InputObjectArgField;
