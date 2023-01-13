import Link from "next/link";
import React from "react";
import { HeadingCircleLeft, ScaledButton, Text6Xl } from "../../commons";

const WhatWeDo = () => {
  return (
    <section className="px-10 py-24 what-we-do bg-gray-200">
      <div className="container grid gap-5 grid-cols-12 mx-20">
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
      </div>
    </section>
  );
};

export default WhatWeDo;
