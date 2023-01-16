import Link from "next/link";
import React from "react";
import { PlainButton, Text3Xl, TextMd } from "../../commons";

const Total = () => {
  return (
    <div>
      <Text3Xl text="Cart Totals" classes="!text-gray-500" />
      <div className="mt-4 w-80">
        <div className="p-3 border">
          <div className="flex justify-between items-center">
            <TextMd text="Sub Total" classes="!text-gray-500" />
            <TextMd text="$400" classes="!text-black" />
          </div>
        </div>
        <div className="p-3 border border-t-0">
          <div className="flex justify-between items-center">
            <TextMd text="Delivery Charges" classes="!text-gray-500" />
            <TextMd text="$40" classes="!text-black" />
          </div>
        </div>
        <div className="p-3 border border-t-0">
          <div className="flex justify-between items-center">
            <TextMd text="Total" classes="!text-gray-500" />
            <TextMd text="$400" classes="!text-black" />
          </div>
        </div>
        <div className="my-6">
          <Link href="/checkout">
            <PlainButton
              text="Proceed To Checkout"
              size="large"
              buttonColor="bg-indigo-600 hover:bg-yellow-300"
              textColor="text-white hover:text-black"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Total;
