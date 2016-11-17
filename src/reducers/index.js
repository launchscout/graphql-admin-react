import { createReducer } from 'redux-act';
import { fetchSchemaAction, schemaFetchedAction } from '../actions/fetchSchema';

const initialState = {};


export const graphql = createReducer({
  [schemaFetchedAction]: (state, schema) => Object.assign(state, { schema })
}, initialState);
