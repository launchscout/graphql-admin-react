import React from 'react';
import { findEnumValues, findEffectiveType } from './graphql_utils';

const EnumArgField = ({arg, schema, argValueChange, prefix}) => {
  const enumValues = findEnumValues(schema, findEffectiveType(arg.type).name);
  return (
    <div className="form-group">
      <label>{arg.name}</label>
      <select className="form-control" name={arg.name} onChange={ (event) => { argValueChange(prefix.concat(arg.name), event.target.value) } }>
        { enumValues.map( (enumValue, index) => (
            <option key={index}>{enumValue.name}</option>
          ))
        }
      </select>
    </div>
  );
};

export default EnumArgField
