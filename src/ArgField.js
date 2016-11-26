import React from 'react';
import { isEnum } from './graphql_utils';
import SimpleArgField from './SimpleArgField';
import InputObjectArgField from './InputObjectArgField';
import EnumArgField from './EnumArgField';

const ArgField = ({ arg, schema, argValueChange, prefix=[] }) => {
  if (arg.type.kind == "INPUT_OBJECT") {
    return (
      <InputObjectArgField
        prefix={prefix}
        schema={schema}
        arg={arg}
        argValueChange={argValueChange}
      />
    );
  } else if (isEnum(arg)) {
    return (
      <EnumArgField arg={arg} argValueChange={argValueChange} prefix={prefix} schema={schema} />
    );
  } else {
    return (
    <SimpleArgField
      prefix={prefix}
      arg={arg}
      argValueChange={argValueChange}
    />
    );

  }
}

export default ArgField;
