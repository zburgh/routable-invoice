import React, { Component } from "react";
import "./InvoiceTable.css";

import TableCell from "../Tables/TableCell";
import note from "../../Images/note.svg";

class InvoiceTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>
              <TableCell title="Date" />
            </th>
            <th>
              <TableCell title="Task" />
            </th>
            <th>
              <TableCell title="Quantity" />
            </th>
            <th>
              <TableCell title="Rate" />
            </th>
            <th>
              <TableCell title="Total" />
            </th>
            <th>
              <TableCell />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row">
            <TableCell title="May 22nd, 2019" />
            <TableCell title="Design" />
            <TableCell title="1" />
            <TableCell title="$75.00" />
            <TableCell title="$75.00" />
            <td>
              <img className="note" src={note} />
            </td>
          </tr>
          <tr className="table-row">
            <TableCell title="May 30th, 2019" />
            <TableCell title="Hours" />
            <TableCell title="12" />
            <TableCell title="$500.00" />
            <TableCell title="$6,000.00" />
            <td>
              <img className="note" src={note} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default InvoiceTable;
