import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../redux/slices/cart";
import { PlainButton } from "../../commons";

const ClearCart = () => {
  /**
   * Redux Helper Functions
   */
  const dispatch = useDispatch();

  return (
    <div>
      <PlainButton
        onClick={() => dispatch(clearCart())}
        text="Clear Cart"
        buttonColor="bg-indigo-600 hover:bg-yellow-300"
        textColor="text-white hover:text-black"
        shadow={true}
      />
    </div>
  );
};

export default ClearCart;
