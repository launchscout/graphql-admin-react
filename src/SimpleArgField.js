import React from 'react';

const SimpleArgField = ({arg, argValueChange, prefix}) =>
(
  <div>
    <label>{arg.name}</label>
    <input name={arg.name} onChange={ (event) => argValueChange(prefix.concat(arg.name), event.target.value)} />
  </div>
);

export default SimpleArgField
