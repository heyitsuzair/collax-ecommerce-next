import Image from "next/image";
import React from "react";
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
  const FOOTER_IMAGE = "/img/news-1.png";

  /**
   * Background Image
   */
  const bg = "/img/news-shape.png";

  /**
   * Bottom Image For Footer
   */
  const BOTTOM_IMAGE = "/img/service-1.png";

  return (
    <div className="w-10/12 mx-auto">
      <div
        className="relative bg-no-repeat bg-contain bg-right rounded-2xl my-20 bg-indigo-600"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col px-10 lg:px-0 lg:pl-20 py-10 lg:py-20 justify-between gap-10 lg:flex-row lg:gap-24">
          <div className="left flex flex-col gap-10">
            <HeadingCircleLeft text="Get Update" textClasses="!text-gray-300" />
            <Text5Xl
              text="Get latest updates and deals"
              classes="font-bold lg:pr-24"
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
            <Image
              src={FOOTER_IMAGE}
              unoptimized
              width={100}
              height={100}
              className="w-96 lg:w-[28rem] h-full object-contain"
              alt="Loading..."
            />
          </div>
        </div>
        <Image
          src={BOTTOM_IMAGE}
          unoptimized
          width={100}
          height={100}
          alt="Loading..."
          className="absolute w-20 lg:w-24 -left-7 -bottom-5"
        />
      </div>
    </div>
  );
};

export default PreFooter;
