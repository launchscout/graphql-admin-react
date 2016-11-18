import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findQueryType, findQueryField, isListQuery } from './graphql_utils';
import { executeQueryAction } from './actions/executeQuery';
import { getSchema, getQueryResult } from './reducers';
import QueryResultsTable from './QueryResultTable';
import QueryResult from './QueryResult';
import QueryArgsForm from './QueryArgsForm';

const displayQueryResult = (queryField, queryResult) => {
  if (isListQuery(queryField)) {
    return <QueryResultsTable results={queryResult} />;
  } else {
    return <QueryResult result={queryResult} />;
  }
};

const Query = ({params, queryType, queryField, executeQuery, queryResult}) => {
  return (
    <div>
    <h3>{params.queryName}</h3>
    { queryType.name }
    <QueryArgsForm queryArgs={queryField.args} onExecute={executeQuery} />
    <ul>
      { queryType.fields.map(field => <li>{field.name}</li>)}
    </ul>
    { queryResult ? displayQueryResult(queryField, queryResult) : '' }
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    queryField: findQueryField(getSchema(state), ownProps.params.queryName),
    queryType: findQueryType(getSchema(state), ownProps.params.queryName),
    queryResult: getQueryResult(state)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    executeQuery: (args) => dispatch(executeQueryAction(ownProps.params.queryName, args))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Query);
