import React, { Component } from 'react';

const QueryResult = ({ result }) => {
  const fields = Object.keys(result);
  return (
    <table>
      <tbody>
        { fields.map( field =>
          <tr>
            <td>{field}</td>
            <td>{result[field]}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default QueryResult;
