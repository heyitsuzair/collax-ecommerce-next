import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WhatWeDoCards } from "../../../config";
import {
  CardImageTitleDescriptionButton,
  HeadingCircleLeft,
  ScaledButton,
  Text6Xl,
} from "../../commons";

const WhatWeDo = () => {
  return (
    <section className="p-24 what-we-do bg-gray-100">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6 flex flex-col gap-5">
          <HeadingCircleLeft text="What We Do?" />
          <Text6Xl
            text="Experts in every aspect lifecycle"
            classes={"text-gray-900 font-bold dm-sans"}
          />
          <div className="mt-5">
            <Link href="/about">
              <ScaledButton size="large" text="About Us" />
            </Link>
          </div>
        </div>
        {WhatWeDoCards.map((card, index) => {
          return (
            <div key={index} className="col-span-6">
              <CardImageTitleDescriptionButton {...card} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeDo;
