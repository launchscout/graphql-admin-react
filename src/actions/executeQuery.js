import { createAction } from 'redux-act';
import { getSchema } from '../reducers';
import { buildQuery } from '../graphql_utils';

export const queryExecutedAction = createAction('queryExecuted');

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
