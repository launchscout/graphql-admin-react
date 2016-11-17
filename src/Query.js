import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findQueryType } from './graphql_utils';

const Query = ({params, query}) =>
  (
    <div>
    <h3>{params.queryName}</h3>
    { query.name }
    <ul>
      { query.fields.map(field => <li>{field.name}</li>)}
    </ul>
    </div>
  )

const mapStateToProps = (state, ownProps) => {
  return {
    query: findQueryType(state, ownProps.params.queryName)
  };
}

export default connect(mapStateToProps)(Query);
