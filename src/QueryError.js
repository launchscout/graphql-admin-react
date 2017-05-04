import React, { Component } from 'react';

const QueryError = ({ queryError }) => {
  return (
    <ul>
      { queryError.graphQLErrors.map( (error, index) =>
        <li key={index}>
          {error.message}
        </li>
      )}
    </ul>
  );
}

export default QueryError;
