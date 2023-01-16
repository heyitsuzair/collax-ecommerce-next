import React from "react";
import ClearCart from "./ClearCart";
import Table from "./Table";

const MainContent = () => {
  return (
    <div className="container mx-auto px-10 lg:px-16 xl:px-28 my-32">
      <Table />
      <div className="flex justify-end my-6">
        <ClearCart />
      </div>
    </div>
  );
};

export default MainContent;
