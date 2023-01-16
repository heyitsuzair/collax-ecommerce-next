import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <div>
      <table>
        <tr>
          <th class="border text-center px-8 py-2">Image</th>
          <th class="border text-center px-8 py-2">Product</th>
          <th class="border text-center px-8 py-2">Unit Price</th>
          <th class="border text-center px-8 py-2">Quantity</th>
          <th class="border text-center px-8 py-2">Total</th>
          <th class="border text-center px-8 py-2">Remove</th>
        </tr>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </table>
    </div>
  );
};

export default Table;
