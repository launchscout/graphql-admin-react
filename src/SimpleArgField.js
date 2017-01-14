import React from 'react';

const typeConvert = (arg, value) => {
  console.log(arg);
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
