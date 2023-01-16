import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <div className="overflow-x">
      <table className="w-full table-auto overflow-scroll block md:table">
        <thead>
          <tr>
            <th className="border text-center px-8 py-2">Image</th>
            <th className="border text-center px-8 py-2">Product</th>
            <th className="border text-center px-8 py-2">Unit Price</th>
            <th className="border text-center px-8 py-2">Quantity</th>
            <th className="border text-center px-8 py-2">Total</th>
            <th className="border text-center px-8 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
