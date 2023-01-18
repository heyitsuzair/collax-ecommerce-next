import React from "react";
import { ProductsInfinite } from "../../commons";

const MainContent = ({ products, meta, fetchNextData }) => {
  /**
   * Infinite Scroll Props
   */
  const InfiniteScrollProps = {
    productsData: products,
    meta,
    fetchNextData,
  };

  return (
    <div className="container mx-auto px-10 lg:px-14 xl:px-20 my-32">
      <ProductsInfinite {...InfiniteScrollProps} />
    </div>
  );
};

export default MainContent;
