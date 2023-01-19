import React from "react";
import { useSelector } from "react-redux";
import EmptyRow from "./EmptyRow";
import TableRow from "./TableRow";

const Table = () => {
  /**
   * Redux Helper functions
   */
  const cart = useSelector((store) => store.cart);

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
          {cart.cartItems.length < 1 ? (
            <EmptyRow />
          ) : (
            <>
              {cart.cartItems.map((item) => {
                return <TableRow key={item.product_id} {...item} />;
              })}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
