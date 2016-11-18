import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import Query from './Query';
import { clearQueryResultAction } from './actions/executeQuery';

hashHistory.listen(() => store.dispatch(clearQueryResultAction()));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/query/:queryName" component={Query} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
