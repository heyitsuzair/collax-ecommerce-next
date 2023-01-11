import React from "react";

const ScaledButton = ({
  text,
  icon,
  onClick,
  size,
  buttonColor,
  textColor,
}) => {
  let buttonSize;
  let buttonBorderRadius;

  /**
   * Check What Size We Got As Prop And Than Set Size And Border Radius Accordingly
   */
  if (size && size === "medium") {
    buttonSize = "h-12 w-48";
    buttonBorderRadius = "rounded-lg";
  } else if (size && size === "large") {
    buttonSize = "h-16 w-64";
    buttonBorderRadius = "rounded-xl";
  } else if (size && size === "small") {
    buttonSize = "h-8 w-32";
    buttonBorderRadius = "rounded-md";
  } else {
    buttonSize = "h-12 w-48";
    buttonBorderRadius = "rounded-lg";
  }

  /**
   * Check Whether the button color is provided or not
   */
  if (!buttonColor) {
    buttonColor = "bg-indigo-500";
  }
  /**
   * Check Whether the button color is provided or not
   */
  if (!textColor) {
    textColor = "text-white";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`b mx-auto ${buttonSize} flex justify-center items-center`}
    >
      <div
        className={`i ${buttonSize} ${buttonColor} items-center  ${buttonBorderRadius} shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out`}
      ></div>
      <span
        className={`text-center ${textColor} font-semibold z-10 pointer-events-none`}
      >
        {text}

        {icon && (
          <>
            &nbsp; <i className={`fa ${icon}`} aria-hidden="true"></i>
          </>
        )}
      </span>
    </button>
  );
};

export default ScaledButton;
