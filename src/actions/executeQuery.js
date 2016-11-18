import { createAction } from 'redux-act';
import { getSchema } from '../reducers';
import { buildQuery, buildMutation } from '../graphql_utils';

export const queryExecutedAction = createAction('queryExecuted');
export const clearQueryResultAction = createAction('clear query result');

export const executeQueryAction = (queryName, args) => {
  console.log('executing query' + queryName);
  return (dispatch, getState, client) => {
    console.log('in thunk');
    const schema = getSchema(getState());
    client.query({
      query: buildQuery(schema, queryName, args),
      variables: args
    }).then((result) => {
      console.log(result);
      dispatch(queryExecutedAction(result.data[queryName]));
    });
  };
};

export const executeMutationAction = (mutationName, args) => {
  return (dispatch, getState, client) => {
    const schema = getSchema(getState());
    client.mutate({
      mutation: buildMutation(schema, mutationName, args),
      variables: args
    }).then((result) => {
      console.log(result);
      dispatch(queryExecutedAction(result.data[mutationName]));
    });
  };
};
