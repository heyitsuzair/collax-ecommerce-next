import React from "react";
import ClearCart from "./ClearCart";
import Table from "./Table";
import Total from "./Total";

const MainContent = () => {
  return (
    <div className="container mx-auto px-5 lg:px-16 xl:px-28 my-32">
      <Table />
      <div className="flex justify-end my-6">
        <ClearCart />
      </div>
      <Total />
    </div>
  );
};

export default MainContent;
