
export const findType = (schema, name) => {
  return schema.types.find(type => type.name === name);
};

export const extractQueries = (state) => {
  return state.graphql && state.graphql.schema ?
    findType(state.graphql.schema, state.graphql.schema.queryType.name).fields : [];
};

const isListQuery = (queryField) => queryField.type.kind === "LIST";

export const findQueryType = (state, name) => {
  const queries = extractQueries(state);
  const queryField = queries.find(field => field.name === name);
  if (isListQuery(queryField)) {
    return findType(state.graphql.schema, queryField.type.ofType.name);
  } else {
    return findType(state.graphql.schema, queryField.type.name);
  }
  // return findType(state.graphql.schema, queryField.type.name);
};
