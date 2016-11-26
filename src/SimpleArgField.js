import React from 'react';

const SimpleArgField = ({arg, onChange, prefix}) =>
(
  <div>
    <label>{arg.name}</label>
    <input name={arg.name} onChange={ onChange } />
  </div>
);

export default SimpleArgField
