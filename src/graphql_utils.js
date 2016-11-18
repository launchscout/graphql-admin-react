import gql from 'graphql-tag';

export const findType = (schema, name) => {
  return schema.types.find(type => type.name === name);
};

export const extractQueries = (schema) => {
  const queryType = findType(schema, schema.queryType.name);
  console.log(queryType);
  return queryType.fields;
};

export const isListQuery = (queryField) => queryField.type.kind === "LIST";

export const findQueryField = (schema, name) => {
  const queries = extractQueries(schema);
  return queries.find(field => field.name === name);
};

export const findQueryType = (schema, name) => {
  const queryField = findQueryField(schema, name);
  if (isListQuery(queryField)) {
    return findType(schema, queryField.type.ofType.name);
  } else {
    return findType(schema, queryField.type.name);
  }
};

const argsWithValues = (queryArgs, argValues) => {
  return queryArgs.filter(queryArg => argValues[queryArg.name] && argValues[queryArg.name] !== '');
};

const declareArgumentVariables = (queryArgs, argValues) => {
  let declarations = argsWithValues(queryArgs, argValues)
    .map((arg) => {
      return `$${arg.name}: ${arg.type.kind === 'NON_NULL' ? `${arg.type.ofType.name}!` : arg.type.name}`
    });
  return declarations.length > 0 ? `(${declarations.join(', ')})` : '';
};

const argumentVariables = (queryArgs, argValues = {}) => {
  const argVariables = argsWithValues(queryArgs, argValues)
    .map((arg) => `${arg.name}: $${arg.name}`);
  return argVariables.length >  0  ? `(${argVariables.join(', ')})` : '';
};

const isScalar = (field) => field.type.kind === "SCALAR";

export const buildQuery = (schema, queryName, args) => {
  console.log(schema, queryName, args);
  const queryArgs = findQueryField(schema, queryName).args;
  return gql`
  query doIt${declareArgumentVariables(queryArgs, args)} {
    ${queryName}${argumentVariables(queryArgs, args)} {
      ${findQueryType(schema, queryName).fields.filter(isScalar).map(field => field.name).join(", ")}
    }
  }
  `;
}
