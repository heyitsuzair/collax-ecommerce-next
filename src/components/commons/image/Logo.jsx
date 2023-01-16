import Image from "next/image";
import React from "react";

const Logo = ({ height }) => {
  let imageHeight = `w-full h-${height ? height : "16"}`;

  /**
   * Path
   */
  const logo = "/img/logo.png";

  return (
    <Image
      unoptimized
      src={logo}
      width={100}
      height={100}
      alt="Loading..."
      className={`${imageHeight} object-cover`}
    />
  );
};

export default Logo;
