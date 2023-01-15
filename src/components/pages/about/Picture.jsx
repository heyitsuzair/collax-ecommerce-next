import Image from "next/image";
import React from "react";

const Picture = () => {
  /**
   * My Picture
   */
  const IMAGE = require("../../../img/me.JPG");

  return (
    <div className="w-full mx-auto lg:w-80 overflow-hidden rounded-2xl">
      <Image
        src={IMAGE}
        alt="Loading..."
        className="w-full mx-auto lg:w-80 transition-all rounded-2xl duration-500 hover:scale-110"
      />
    </div>
  );
};

export default Picture;
