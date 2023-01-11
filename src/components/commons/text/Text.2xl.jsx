import React from "react";

const Text2Xl = ({ classes, text }) => {
  return (
    <h1 className={`text-xl md:text-2xl text-white ${classes}`}>{text}</h1>
  );
};

export default Text2Xl;
