import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import Query from './Query';
import Mutation from './Mutation';
import App from './App';
import { clearQueryResultAction } from './actions/executeQuery';

hashHistory.listen(() => store.dispatch(clearQueryResultAction()));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
