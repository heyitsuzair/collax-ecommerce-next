import React from "react";
import { CardProduct } from "../../commons";

const MainContent = ({ products, meta }) => {
  return (
    <div className="container mx-auto px-10 lg:px-14 xl:px-20 my-32">
      <div className="grid grid-cols-12 items-center justify-center gap-8">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
            >
              <CardProduct {...product.attributes} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainContent;
