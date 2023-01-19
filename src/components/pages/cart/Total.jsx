import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { PlainButton, Text3Xl, TextMd } from "../../commons";

const Total = () => {
  /**
   * Redux Helper functions
   */
  const cart = useSelector((store) => store.cart);
  return (
    <div>
      <Text3Xl text="Cart Totals" classes="!text-gray-500" />
      <div className="mt-4 w-80">
        <div className="p-3 border">
          <div className="flex justify-between items-center">
            <TextMd text="Sub Total" classes="!text-gray-500" />
            <TextMd text={`$${cart.total}`} classes="!text-black" />
          </div>
        </div>
        <div className="p-3 border border-t-0">
          <div className="flex justify-between items-center">
            <TextMd text="Delivery Charges" classes="!text-gray-500" />
            <TextMd
              text={`$${cart.cartItems.length > 0 ? "40" : "0"}`}
              classes="!text-black"
            />
          </div>
        </div>
        <div className="p-3 border border-t-0">
          <div className="flex justify-between items-center">
            <TextMd text="Total" classes="!text-gray-500" />
            <TextMd
              text={`$${cart.cartItems.length > 0 ? cart.total + 40 : 0}`}
              classes="!text-black"
            />
          </div>
        </div>
        <div className="my-6">
          {cart.cartItems.length > 0 ? (
            <Link href="/checkout">
              <PlainButton
                text="Proceed To Checkout"
                size="large"
                buttonColor="bg-indigo-600 hover:bg-yellow-300"
                textColor="text-white hover:text-black"
              />
            </Link>
          ) : (
            <PlainButton
              text="Proceed To Checkout"
              isDisabled
              size="large"
              buttonColor="bg-indigo-600 disabled:hover:bg-indigo-600 hover:bg-yellow-300"
              textColor="text-white disabled:hover:text-white hover:text-black"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Total;
