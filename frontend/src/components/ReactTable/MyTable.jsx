import React from 'react';

const MyTable = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.Header}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.Header}>{row[column.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
