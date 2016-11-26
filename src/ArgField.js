import React from 'react';
import { isEnum } from './graphql_utils';
import SimpleArgField from './SimpleArgField';
import InputObjectArgField from './InputObjectArgField';
import EnumArgField from './EnumArgField';

const ArgField = ({ arg, schema, onChange, prefix }) => {
  if (arg.type.kind == "INPUT_OBJECT") {
    return (
      <InputObjectArgField
        prefix={prefix}
        schema={schema}
        arg={arg}
        onChange={onChange}
      />
    );
  } else if (isEnum(arg)) {
    return (
      <EnumArgField arg={arg} onChange={onChange} schema={schema} />
    );
  } else {
    return (
    <SimpleArgField
      prefix={prefix}
      arg={arg}
      onChange={onChange}
    />
    );

  }
}

export default ArgField;
