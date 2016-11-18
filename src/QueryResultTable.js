import React, { Component } from 'react';

const QueryResultTable = ({ results }) => {
  const fields = Object.keys(results[0]);
  return (
    <table>
      <thead>
        <tr>
          { fields.map( field => (<th>{field}</th>) ) }
        </tr>
      </thead>
      <tbody>
      { results.map( result =>
        <tr>
          { fields.map( field =>
            <td>{result[field]}</td>
          )}
        </tr>
      ) }
      </tbody>
    </table>
  );
}

export default QueryResultTable;
