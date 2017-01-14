import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchSchemaAction } from './actions/fetchSchema';
import { extractQueries, findMutations } from './graphql_utils';
import { getSchema } from './reducers';

class Home extends Component {

  render() {
    return (
      <div className="App">
        Queries
        <ul>
        { this.props.queries.map( (query) => (
          <li><Link to={`/query/${query.name}`}>{query.name}</Link></li>
        ))}
        </ul>
        Mutations
        <ul>
        { this.props.mutations.map( (mutation) => (
          <li><Link to={`/mutation/${mutation.name}`}>{mutation.name}</Link></li>
        ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const schema = getSchema(state);
  return {
    queries: schema ? extractQueries(schema) : [],
    mutations: schema ? findMutations(schema) : []
  }
};


export default connect(mapStateToProps)(Home);
