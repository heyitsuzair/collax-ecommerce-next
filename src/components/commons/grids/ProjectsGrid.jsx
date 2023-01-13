import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScaledButton from "../buttons/ScaledButton";
import Text4Xl from "../text/Text.4xl";
import TextMd from "../text/Text.md";
import TextXl from "../text/Text.xl";

const ProjectsGrid = () => {
  const image = require("../../../img/port1.png");

  return (
    <div class="grid grid-cols-12 gap-6 justify-center">
      <div className="bg-gray-100 flex flex-col gap-6 lg:gap-8 p-3 lg:p-7 col-span-12 lg:col-span-6 rounded-2xl">
        <div className="p-3 lg:p-5 bg-gray-300 rounded-2xl">
          <Image
            src={image}
            alt="Loading..."
            className="rounded-xl w-full h-full"
          />
        </div>
        <Text4Xl
          text="Banking App Management"
          classes="text-black font-medium"
        />
        <TextMd
          text="At Fellow Coders we specialize in designing, building, shipping..."
          classes="text-gray-400 font-medium"
        />
        <Link href={"/"}>
          <ScaledButton
            size="large"
            text="View Code"
            icon="fa fa-arrow-right"
          />
        </Link>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="justify-center bg-gray-100 grid grid-cols-12 gap-6 p-3 lg:p-7 col-span-12 lg:col-span-6 rounded-2xl">
            <div className="p-3 lg:p-5 bg-gray-300 col-span-12 lg:col-span-6 rounded-2xl">
              <Image
                src={image}
                alt="Loading..."
                className="rounded-xl object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-6 col-span-12 lg:col-span-6">
              <TextXl
                text="Banking App Management"
                classes="text-black font-medium"
              />
              <TextMd
                text="At Fellow Coders we specialize in designing, building, shipping..."
                classes="text-gray-400 font-medium"
              />
              <Link href={"/"}>
                <ScaledButton
                  size="medium"
                  text="View Code"
                  textColor="black"
                  buttonColor="bg-white"
                  icon="fa fa-arrow-right"
                />
              </Link>
            </div>
          </div>
          <div className="justify-center bg-gray-100 grid grid-cols-12 gap-6 p-3 lg:p-7 col-span-12 lg:col-span-6 rounded-2xl">
            <div className="p-3 lg:p-5 bg-gray-300 col-span-12 lg:col-span-6 rounded-2xl">
              <Image
                src={image}
                alt="Loading..."
                className="rounded-xl object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-6 col-span-12 lg:col-span-6">
              <TextXl
                text="Banking App Management"
                classes="text-black font-medium"
              />
              <TextMd
                text="At Fellow Coders we specialize in designing, building, shipping..."
                classes="text-gray-400 font-medium"
              />
              <Link href={"/"}>
                <ScaledButton
                  size="medium"
                  text="View Code"
                  textColor="black"
                  buttonColor="bg-white"
                  icon="fa fa-arrow-right"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
