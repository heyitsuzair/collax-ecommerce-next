import { createSlice, current } from "@reduxjs/toolkit";
import { SuccessMessage } from "../../../components/commons";

const initialState = {
  total: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      /**
       * Find By ID
       */
      const isInCart = current(state).cartItems.find(
        (item) => item.product_id === payload.product_id
      );

      /**
       * ?isInCart Delete Product From Cart And Add Again With Updated Values
       */
      if (isInCart) {
        /**
         * Find By ID
         */
        const isInCart = current(state).cartItems.filter(
          (item) => item.product_id !== payload.product_id
        );
        const newCart = [...isInCart, payload];

        /**
         * Set New Cart
         */
        state.cartItems = newCart;

        /**
         * Show Toast
         */
        SuccessMessage("Product Updated!");

        return;
      }

      const newCart = [...state.cartItems, payload];

      /**
       * Set New Cart
       */
      state.cartItems = newCart;

      /**
       * Calculate Total
       */
      state.total += payload.req_qty * payload.product_info.price;

      /**
       * Show Toast
       */
      SuccessMessage("Product Added In Cart!");
    },
    buyNow: (state, { payload }) => {
      /**
       * Set New Cart
       */
      state.cartItems = [payload];

      /**
       * Calculate Total
       */
      state.total += payload.req_qty * payload.product_info.price;
    },
    clearCart: (state) => {
      // Set Cart Back To Its Initial State

      state.cartItems = [];
      state.total = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, clearCart, buyNow } = cartSlice.actions;

export default cartSlice.reducer;
