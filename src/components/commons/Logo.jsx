import Image from "next/image";
import React from "react";

const Logo = ({ height }) => {
  let imageHeight = `w-full h-${height ? height : "16"}`;

  /**
   * Path
   */
  const logo = require("../../img/logo-blue.png");

  return (
    <Image
      src={logo}
      alt="Loading..."
      className={`${imageHeight} object-cover`}
    />
  );
};

export default Logo;
