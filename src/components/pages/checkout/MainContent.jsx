import React from "react";
import BillingDetails from "./BillingDetails";

const MainContent = () => {
  return (
    <div className="container mx-auto px-5 lg:px-16 my-32">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6">
          <BillingDetails />
        </div>
        <div className="col-span-12 md:col-span-6">Hello</div>
      </div>
    </div>
  );
};

export default MainContent;
