import Image from "next/image";
import React from "react";

const Picture = () => {
  /**
   * Product Picture
   */
  const PRODUCT_PICTURE = "/img/port1.png";

  return (
    <Image
      alt="Loading..."
      width={100}
      height={100}
      className="w-full h-[32rem] object-cover"
      unoptimized
      src={PRODUCT_PICTURE}
    />
  );
};

export default Picture;
