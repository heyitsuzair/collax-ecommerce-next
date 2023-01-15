import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ScaledButton, Text7Xl, TextLg } from "../../commons";

const Hero = () => {
  /**
   * Image For Hero
   */
  const HERO_IMAGE = require("../../../img/hero-2.png");

  return (
    <div>
      <div className="bg-indigo-500 rounded-full hidden lg:hidden lg:w-[690px] lg:h-[690px] z-[1] absolute -right-[29rem] -top-36"></div>

      <div className="h-screen gap-8 grid grid-cols-12">
        <div className="left col-span-12 lg:col-span-7 p-10 lg:pl-24 lg:pt-16 mt-[30vh] lg:mt-40 flex flex-col gap-8 lg:gap-12">
          <Text7Xl
            text="We make things look good"
            classes={"text-gray-900 font-bold dm-sans"}
          />

          <TextLg
            text="At Fellow Coders we specialize in designing, building, shipping and scaling beautiful,
              usable products with blazing-fast efficiency"
            classes={"text-gray-400 font-medium dm-sans"}
          />
          <div className="flex flex-col sm:flex-row gap-8">
            <Link href="/shop">
              <ScaledButton text="Visit Store" size="large" />
            </Link>
            <Link href="/about">
              <ScaledButton
                text="About Me"
                icon="fa fa-arrow-right"
                buttonColor="bg-indigo-100"
                textColor="text-indigo-500"
                size="large"
              />
            </Link>
          </div>
        </div>
        <div className="right hidden lg:block z-[2] col-span-12 lg:col-span-5 lg:mt-40">
          <Image
            src={HERO_IMAGE}
            alt="Loading..."
            className="w-80 lg:w-3/4 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
