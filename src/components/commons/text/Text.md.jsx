import React from "react";

const TextMd = ({ classes, text }) => {
  return <h1 className={`text-sm md:text-md text-white ${classes}`}>{text}</h1>;
};

export default TextMd;
