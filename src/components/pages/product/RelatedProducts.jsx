import React from "react";
import { CardProduct, Text3Xl } from "../../commons";

const RelatedProducts = () => {
  return (
    <div>
      <Text3Xl
        text="Related Products"
        classes="!text-gray-800 !font-medium mb-10 text-center sm:text-start"
      />
      <div className="grid grid-cols-12 items-center justify-center gap-8">
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <CardProduct />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <CardProduct />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <CardProduct />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <CardProduct />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <CardProduct />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <CardProduct />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <CardProduct />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <CardProduct />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <CardProduct />
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
