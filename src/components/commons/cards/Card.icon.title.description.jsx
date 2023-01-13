import React, { useRef } from "react";
import Text4Xl from "../text/Text.4xl";
import TextMd from "../text/Text.md";

const CardIconTitleDescription = ({ color, icon, title, description }) => {
  const ref = useRef();

  /**
   * Capture on mouse enter
   */
  const onMouseEnter = () => {
    ref.current.classList.remove("text-neutral-600");
    ref.current.classList.add("-mt-6", "text-neutral-800");
  };
  /**
   * Capture on mouse leave
   */
  const onMouseLeave = () => {
    ref.current.classList.add("text-neutral-600");
    ref.current.classList.remove("-mt-6", "text-neutral-800");
  };

  return (
    <div
      className={`${color} rounded-2xl py-10 w-full`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex gap-1 lg:gap-7 items-center justify-center">
        <i
          className={`${icon} text-neutral-600 transition-all text-6xl`}
          ref={ref}
        ></i>
        <div>
          <Text4Xl classes="font-semibold text-black" text={title} />
          <TextMd text={description} classes="text-black font-medium mt-1" />
        </div>
      </div>
    </div>
  );
};

export default CardIconTitleDescription;
