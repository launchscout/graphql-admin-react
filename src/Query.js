import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findQueryReturnType, findQueryField, isListQuery } from './graphql_utils';
import { executeQueryAction } from './actions/executeQuery';
import { getSchema, getQueryResult, getQueryError } from './reducers';
import QueryResultsTable from './QueryResultTable';
import QueryResult from './QueryResult';
import QueryError from './QueryError';
import QueryArgsForm from './ArgsForm';

const displayQueryResult = (queryField, queryResult) => {
  if (isListQuery(queryField)) {
    return <QueryResultsTable results={queryResult} />;
  } else {
    return <QueryResult result={queryResult} />;
  }
};

const displayQueryError = (queryError) => {
  console.log(queryError);
  return <QueryError queryError={queryError} />;
}

export const Query = ({params, queryType, queryField, schema, executeQuery, queryError, queryResult}) => {
  return (
    <div>
    <h3>{params.queryName}</h3>
    <QueryArgsForm schema={schema} args={queryField.args} onExecute={executeQuery} buttonLabel="Execute Query"/>
    { queryError ? displayQueryError(queryError) : ''}
    { queryResult ? displayQueryResult(queryField, queryResult) : '' }
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  return {
    queryField: findQueryField(getSchema(state), ownProps.params.queryName),
    queryType: findQueryReturnType(getSchema(state), ownProps.params.queryName),
    queryResult: getQueryResult(state),
    queryError: getQueryError(state),
    schema: getSchema(state)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    executeQuery: (args) => dispatch(executeQueryAction(ownProps.params.queryName, args))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Query);
