import Image from "next/image";
import React from "react";

import bg from "../../../img/ab-1.1.jpg";
import { ScaledButton, Text6Xl } from "../index";

const BreadcrumbTopPage = ({ text }) => {
  /**
   * Bottom Image For Footer
   */
  const BOTTOM_IMAGE = require("../../../img/service-1.png");

  return (
    <header id="breadcrumb">
      <div
        className="relative flex items-center bg-no-repeat bg-cover bg-[77%] lg:bg-[90%] -mt-20 h-[50vh] lg:h-screen"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="container mx-7 lg:mx-32 flex flex-col gap-7 lg:gap-10">
          <Text6Xl text={text} classes="text-black font-bold" />
          <a href="//wa.link/bgpq3g" target="_blank" rel="noreferrer">
            <ScaledButton
              text="Let's Work Together"
              icon="fa fa-arrow-right"
              buttonColor="bg-white border-b-4 border-indigo-500"
              textColor="text-black"
              size="large"
            />
          </a>
        </div>
        <Image
          src={BOTTOM_IMAGE}
          alt="Loading..."
          className="absolute w-20 lg:w-28 left-10 -bottom-5"
        />
      </div>
    </header>
  );
};

export default BreadcrumbTopPage;
