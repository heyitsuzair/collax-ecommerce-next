import React from "react";
import { useSelector } from "react-redux";
import {
  PlainButton,
  SpinnerMedium,
  Text3Xl,
  TextLg,
  TextSm,
} from "../../commons";
import PaymentMethods from "./PaymentMethods";

const YourOrder = ({
  isLoading,
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  touched,
  errors,
}) => {
  /**
   * Props For  Payment Methods Component
   */
  const PaymentMethodProps = {
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
  };

  /**
   * Redux Helper Functions
   */
  const cart = useSelector((store) => store.cart);

  return (
    <div>
      <div>
        <Text3Xl
          text="Your Order"
          classes="!text-black font-semibold border-b pb-4"
        />
      </div>
      <div className="order-items my-8">
        <div className="flex border-b pb-3 justify-between my-6">
          <TextSm text="Product" classes="!text-gray-500" />
          <TextSm text="Total" classes="!text-gray-500" />
        </div>
        {cart.cartItems.map((item) => {
          return (
            <div
              key={item.product_id}
              className="flex border-b pb-3 justify-between my-6"
            >
              <TextSm
                text={item.product_info.product_title}
                classes="!text-gray-500"
              />
              <TextSm
                text={`$${item.req_qty * item.product_info.price}`}
                classes="!text-gray-700"
              />
            </div>
          );
        })}
        <div className="flex border-b pb-3 justify-between my-6">
          <TextSm text="Delivery Charges" classes="!text-gray-500" />
          <TextSm text="$40" classes="!text-gray-700" />
        </div>
        <div className="flex border-b pb-3 justify-between my-6">
          <TextSm text="Order Total" classes="!text-gray-500" />
          <TextLg
            text={`$${cart.total + 40}`}
            classes="!text-black font-bold"
          />
        </div>
      </div>
      <div className="col-span-12">
        <PaymentMethods {...PaymentMethodProps} />
      </div>
      <div className="col-span-12 mt-4 text-center my-5">
        {isLoading ? (
          <SpinnerMedium />
        ) : (
          <PlainButton
            onClick={handleSubmit}
            text="Place Order"
            textColor="hover:text-black text-white"
            buttonColor="hover:bg-yellow-400 bg-indigo-500 w-full"
          />
        )}
      </div>
    </div>
  );
};

export default YourOrder;
