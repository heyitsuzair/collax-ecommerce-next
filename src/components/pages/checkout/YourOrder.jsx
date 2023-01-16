import React from "react";
import { Text3Xl, TextLg, TextSm } from "../../commons";

const YourOrder = () => {
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
        <div className="flex border-b pb-3 justify-between my-6">
          <TextSm text="iPhone 12" classes="!text-gray-500" />
          <TextSm text="$120" classes="!text-gray-700" />
        </div>
        <div className="flex border-b pb-3 justify-between my-6">
          <TextSm text="Delivery Charges" classes="!text-gray-500" />
          <TextSm text="$40" classes="!text-gray-700" />
        </div>
        <div className="flex border-b pb-3 justify-between my-6">
          <TextSm text="Order Total" classes="!text-gray-500" />
          <TextLg text="$400" classes="!text-black font-bold" />
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
