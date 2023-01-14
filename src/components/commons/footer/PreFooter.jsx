import Image from "next/image";
import React from "react";
import bg from "../../../img/news-shape.png";
import HeadingCircleLeft from "../headings/Heading.circle.left";
import InputIconned from "../inputs/Input.iconned";
import Text5Xl from "../text/Text.5xl";

const PreFooter = () => {
  /**
   * Props For Iconned Input
   */
  const inputProps = {
    placeholder: "Enter Email Address",
    name: "email",
  };

  /**
   * Image For Footer
   */
  const FOOTER_IMAGE = require("../../../img/news-1.png");

  return (
    <div className="w-10/12 mx-auto">
      <div
        className="bg-no-repeat bg-contain bg-right rounded-2xl my-10 bg-indigo-600"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="flex flex-col px-10 lg:px-0 lg:pl-20 py-20 justify-between gap-10 lg:flex-row lg:gap-24">
          <div className="left flex flex-col gap-10">
            <HeadingCircleLeft text="Get Update" textClasses="text-gray-300" />
            <Text5Xl
              text="Get latest updates and deals"
              classes="font-bold pr-24"
            />
            <form action="/" method="GET" className="input">
              <InputIconned
                classes="bg-indigo-500"
                icon="fa-solid fa-paper-plane w-16 h-16 text-white bg-pink-400"
                inputProps={inputProps}
              />
            </form>
          </div>
          <div className="right">
            <Image src={FOOTER_IMAGE} alt="Loading..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
