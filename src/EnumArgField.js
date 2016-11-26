import React from 'react';
import { findEnumValues, findEffectiveType } from './graphql_utils';

const EnumArgField = ({arg, schema, onChange, prefix}) => {
  const enumValues = findEnumValues(schema, findEffectiveType(arg.type).name);
  return (
    <div>
      <label>{arg.name}</label>
      <select name={arg.name} onChange={ onChange }>
        { enumValues.map( (enumValue, index) => (
            <option key={index}>{enumValue.name}</option>
          ))
        }
      </select>
    </div>
  );
};

export default EnumArgField
