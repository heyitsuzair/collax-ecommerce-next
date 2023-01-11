import React from "react";
import TextSm from "./Text.sm";

const TextError = ({ text }) => {
  return <TextSm classes="text-red-500" text={text} />;
};

export default TextError;
