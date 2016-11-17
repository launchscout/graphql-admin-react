import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { createStore } from 'redux';
import { graphql } from './reducers';
import thunk from 'redux-thunk';
import { combineReducers, applyMiddleware } from 'redux';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:4000/graphql' }),
});

const store = createStore(
  combineReducers({
    graphql,
    apollo: client.reducer()
  }),
  applyMiddleware(client.middleware(), thunk.withExtraArgument(client))
);

export default store;
