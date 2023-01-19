import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../redux/slices/cart";
import { PlainButton } from "../../commons";

const ClearCart = () => {
  /**
   * Redux Helper Functions
   */
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  return (
    <div>
      <PlainButton
        onClick={() => dispatch(clearCart())}
        text="Clear Cart"
        isDisabled={cart.cartItems.length < 1}
        buttonColor="bg-indigo-600 disabled:hover:bg-indigo-600 hover:bg-yellow-300"
        textColor="text-white disabled:hover:text-white hover:text-black"
        shadow={true}
      />
    </div>
  );
};

export default ClearCart;
