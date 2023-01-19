import React from "react";

const EmptyRow = () => {
  return (
    <tr>
      <td className="text-center border px-8 py-2" colSpan={12}>
        No Products Found In Cart
      </td>
    </tr>
  );
};

export default EmptyRow;
