import React from "react";
import Icons from "./Icons";
import Info from "./Info";
import Picture from "./Picture";

const MainContent = () => {
  return (
    <div className="container mx-auto px-10 lg:px-16 xl:px-28 my-32">
      <div className="grid grid-cols-12 lg:gap-24 xl:gap-14 justify-center lg:items-center">
        <div className="col-span-12 mb-7 lg:mb-0 lg:col-span-4">
          <Picture />
        </div>
        <div className="col-span-12 flex flex-col lg:flex-row gap-8 lg:gap-16 lg:col-span-8">
          <Info />
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
