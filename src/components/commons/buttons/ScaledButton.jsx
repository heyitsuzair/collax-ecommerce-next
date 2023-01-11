import React from "react";

const ScaledButton = ({
  text,
  icon,
  onClick,
  size,
  buttonColor,
  textColor,
  shadow,
}) => {
  let buttonSize = "h-12 w-48";
  let buttonBorderRadius = "rounded-lg";
  let buttonShadow;

  /**
   * Check What Size We Got As Prop And Than Set Size And Border Radius Accordingly
   */
  if (size && size === "large") {
    buttonSize = "h-14 w-52 md:h-16 md:w-64";
    buttonBorderRadius = "rounded-xl";
  } else if (size && size === "small") {
    buttonSize = "h-8 w-32";
    buttonBorderRadius = "rounded-md";
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

  /**
   * Check Whether the shadow is provided or not
   */
  if (shadow) {
    buttonShadow = "shadow-2xl";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`b ${buttonSize} flex justify-center items-center`}
    >
      <div
        className={`i ${buttonSize} ${buttonColor} items-center  ${buttonBorderRadius} ${buttonShadow} cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out`}
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
