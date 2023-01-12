import React from "react";

const TextLg = ({ classes, text }) => {
  return <h1 className={`text-sm md:text-lg text-white ${classes}`}>{text}</h1>;
};

export default TextLg;