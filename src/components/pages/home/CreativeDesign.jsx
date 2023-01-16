import Image from "next/image";
import React from "react";
import { CreativeDesignCards } from "../../../config";
import { CardIconTitleDescription, IconHoverable, TextLg } from "../../commons";

const CreativeDesign = () => {
  /**
   * Hand Image
   */
  const HAND_IMAGE = "/img/creative-hand.png";
  /**
   * Shape Image
   */
  const SHAPE_IMAGE = "/img/shape-2.png";
  return (
    <div className="bg-neutral-800 relative flex flex-col items-center gap-14 lg:gap-20 p-10 lg:p-28">
      <div className="absolute left-0 top-[40%]">
        <Image
          src={HAND_IMAGE}
          unoptimized
          width={100}
          height={100}
          className="hidden w-full lg:block"
          alt="Loading..."
        />
      </div>
      <div className="absolute left-0 -top-20">
        <Image
          src={SHAPE_IMAGE}
          unoptimized
          width={100}
          height={100}
          className="hidden lg:block"
          alt="Loading..."
        />
      </div>
      <h1
        className="text-2xl md:text-5xl text-white text-center font-semibold"
        style={{ lineHeight: "4rem" }}
      >
        We deploy world-class{" "}
        <span className="text-yellow-300 underline">Creative Design team</span>{" "}
        on demand. that can design, build, ship and scale your vision in the
        most efficient way.
      </h1>
      <a
        href="//github.com/heyitsuzair"
        target="_blank"
        className="flex gap-4 items-center"
        rel="noreferrer"
      >
        <IconHoverable icon="fa fa-external-link" />
        <TextLg text="Take A Look At My Github" classes="font-semibold" />
      </a>
      <div className="cards flex flex-col lg:flex-row w-full gap-6">
        {CreativeDesignCards.map((card) => {
          return <CardIconTitleDescription key={card.title} {...card} />;
        })}
      </div>
    </div>
  );
};

export default CreativeDesign;
