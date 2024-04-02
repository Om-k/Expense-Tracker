import React, { useMemo } from "react";
import { useTable, useFilters } from "react-table";
import "./TableArea.css";

export const TableArea = ({ reqVals, tableFormat, heading }) => {
  // Define table data
  const data = useMemo(() => reqVals, [reqVals]);

  // Define table columns
  const columns = useMemo(() => tableFormat, []);

  // Initialize React Table instance with filter functionality
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useFilters);

  return (
    <div className="tableArea">
      <div className="tableHeader">
        <h2 className="tableHeaderM">{heading}</h2>
      </div>
      <div className="tableLengthSet">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th key={index} {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr
                  key={index}
                  {...row.getRowProps()}
                  className={index % 2 === 0 ? "evenRow" : "oddRow"}
                >
                  {row.cells.map((cell, index) => (
                    <td key={index} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
