import React from 'react';
import { findEffectiveType } from './graphql_utils';

const typeConvert = (arg, value) => {
  if (findEffectiveType(arg.type).name === "Int") {
    return parseInt(value);
  }
  return value;
};

const SimpleArgField = ({arg, argValueChange, prefix}) =>
(
  <div className="form-group">
    <label htmlFor="arg.name">{arg.name}</label>
    <input className="form-control" name={arg.name} onChange={ (event) => argValueChange(prefix.concat(arg.name), typeConvert(arg, event.target.value))} />
  </div>
);

export default SimpleArgField
