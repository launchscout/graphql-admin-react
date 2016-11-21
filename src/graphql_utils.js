import gql from 'graphql-tag';

export const findType = (schema, name) => {
  return schema.types.find(type => type.name === name);
};

export const extractQueries = (schema) => {
  const queryType = findType(schema, schema.queryType.name);
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

export const findEffectiveType = (type) => {
  if (type.kind === "NON_NULL" || type.kind === "LIST") {
    return findEffectiveType(type.ofType);
  } else {
    return type;
  }
};

export const isEnum = (arg) => {
  return arg.type.kind === "NON_NULL" ? arg.type.ofType.kind === "ENUM" : arg.type.kind === "ENUM";
};

export const findEnumValues = (schema, name) => findType(schema, name).enumValues;

export const isListQuery = (queryField) => {
  return queryField.type.kind === "LIST" || (queryField.type.ofType && queryField.type.ofType.kind === "LIST");
};

export const findField = (type, name) => type.fields.find(field => field.name == name);

export const findQueryField = (schema, name) => {
  const queries = extractQueries(schema);
  return queries.find(field => field.name === name);
};

export const findQueryReturnType = (schema, name) => {
  const queryField = findQueryField(schema, name);
  return findType(schema, findEffectiveType(queryField.type).name);
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

const isScalar = (field) => field.type.kind === "SCALAR" || (field.type.ofType && field.type.ofType.kind === "SCALAR");

export const buildQueryFields = (schema, queryName) => {
  return findQueryReturnType(schema, queryName).fields.filter(isScalar).map(field => field.name).join(", ");
};

export const buildQuery = (schema, queryName, args) => {
  console.log(schema, queryName, args);
  console.log(findQueryReturnType(schema, queryName));
  const queryArgs = findQueryField(schema, queryName).args;
  return gql`
  query doIt${declareArgumentVariables(queryArgs, args)} {
    ${queryName}${argumentVariables(queryArgs, args)} {
      ${buildQueryFields(schema, queryName)}
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
