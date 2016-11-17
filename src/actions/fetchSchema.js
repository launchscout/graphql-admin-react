import { createAction } from 'redux-act';
import introspectionQuery from '../introspection_query';

export const schemaFetchedAction = createAction('schemaFetched');

export const fetchSchemaAction = () => {
  console.log('fetching schema');
  return (dispatch, state, client) => {
    client.query({
      query: introspectionQuery
    }).then((result) => {
      dispatch(schemaFetchedAction(result.data.__schema));
    });
  };
};
