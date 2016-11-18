import gql from 'graphql-tag';

export const findType = (schema, name) => {
  return schema.types.find(type => type.name === name);
};

export const extractQueries = (schema) => {
  const queryType = findType(schema, schema.queryType.name);
  console.log(queryType);
  return queryType.fields;
};

export const findMutations = (schema) => {
  const mutationType = findType(schema, schema.mutationType.name);
  return mutationType.fields;
};

export const findMutationField = (schema, name) => {
  return findMutations(schema).find(field => field.name === name);
};

export const findMutationType = (schema, name) => {
  return findType(schema, findMutationField(schema, name).type.name);
}

export const findInputFields = (schema, inputObjectType) => {
  return findType(schema, inputObjectType).inputFields;
}

export const isListQuery = (queryField) => queryField.type.kind === "LIST";

export const findField = (type, name) => type.fields.find(field => field.name == name);

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

export const buildMutation = (schema, mutationName, args) => {
  const mutationArgs = findMutationField(schema, mutationName).args;
  return gql`
  mutation doIt${declareArgumentVariables(mutationArgs, args)} {
    ${mutationName}${argumentVariables(mutationArgs, args)} {
      ${findMutationType(schema, mutationName).fields.filter(isScalar).map(field => field.name).join(", ")}
    }
  }
  `;
}
