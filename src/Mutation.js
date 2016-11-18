import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMutationType, findMutationField, isListQuery } from './graphql_utils';
import { executeMutationAction } from './actions/executeQuery';
import { getSchema, getQueryResult } from './reducers';
import QueryResult from './QueryResult';
import ArgsForm from './ArgsForm';

const displayResult = (queryField, queryResult) => {
  return <QueryResult result={queryResult} />;
};

const Mutation = ({
  params,
  schema,
  mutationResultType,
  mutationField,
  executeMutation,
  mutationResult
}) => {
  return (
    <div>
    <h3>{params.mutationName}</h3>
    <ArgsForm schema={schema} args={mutationField.args} onExecute={executeMutation} buttonLabel="Execute Mutation"/>
    { mutationResult ? displayResult(mutationField, mutationResult) : '' }
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    mutationField: findMutationField(getSchema(state), ownProps.params.mutationName),
    mutationType: findMutationType(getSchema(state), ownProps.params.mutationName),
    mutationResult: getQueryResult(state),
    schema: getSchema(state)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    executeMutation: (args) => dispatch(executeMutationAction(ownProps.params.mutationName, args))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mutation);
