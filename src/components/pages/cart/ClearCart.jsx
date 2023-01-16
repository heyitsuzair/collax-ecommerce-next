import React from "react";
import { PlainButton } from "../../commons";

const ClearCart = () => {
  return (
    <div>
      <PlainButton
        onClick={() => alert("Clear Cart")}
        text="Clear Cart"
        buttonColor="bg-indigo-600 hover:bg-yellow-300"
        textColor="text-white hover:text-black"
        shadow={true}
      />
    </div>
  );
};

export default ClearCart;
