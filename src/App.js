import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchSchemaAction } from './actions/fetchSchema';
import { extractQueries } from './graphql_utils';
import { getSchema } from './reducers';

class App extends Component {

  componentDidMount() {
    this.props.fetchSchema();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
        { this.props.queries.map( (query) => (
          <li><Link to={`/query/${query.name}`}>{query.name}</Link></li>
        ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const schema = getSchema(state);
  return {
    queries: schema ? extractQueries(schema) : []
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchema() {
      dispatch(fetchSchemaAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
