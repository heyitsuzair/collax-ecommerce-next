import Image from "next/image";
import React from "react";

const Picture = () => {
  /**
   * My Picture
   */
  const IMAGE = "/img/me.JPG";

  return (
    <div className="w-full mx-auto lg:w-80 overflow-hidden rounded-2xl">
      <Image
        src={IMAGE}
        width={100}
        height={100}
        unoptimized
        alt="Loading..."
        className="w-full mx-auto lg:w-80 transition-all rounded-2xl duration-500 hover:scale-110"
      />
    </div>
  );
};

export default Picture;
