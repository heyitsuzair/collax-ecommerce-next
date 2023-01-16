import React from "react";
import Picture from "./Picture";
import ProductInfo from "./ProductInfo";

const MainContent = () => {
  return (
    <div className="container mx-auto px-10 lg:px-16 xl:px-28 my-32">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-6">
          <Picture />
        </div>
        <div className="col-span-6">
          <ProductInfo />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
