import Image from "next/image";
import React from "react";

const Picture = ({ product_image }) => {
  /**
   * Product Picture
   */
  const PRODUCT_PICTURE = product_image.data.attributes.url;

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
