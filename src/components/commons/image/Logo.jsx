import Image from "next/image";
import React from "react";

const Logo = ({ height, color }) => {
  let imageHeight = `w-full h-${height ? height : "16"}`;

  /**
   * Path
   */
  const logo = require(`../../../img/logo-${color}.png`);

  return (
    <Image
      src={logo}
      alt="Loading..."
      className={`${imageHeight} object-cover`}
    />
  );
};

export default Logo;
