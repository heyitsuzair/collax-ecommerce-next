import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScaledButton from "../buttons/ScaledButton";
import Text4Xl from "../text/Text.4xl";
import TextMd from "../text/Text.md";
import TextXl from "../text/Text.xl";

const ProjectsGrid = ({ grid }) => {
  /**
   * Images
   */
  const IMAGE_1 = require("../../../img/" + grid[0].image);
  const IMAGE_2 = require("../../../img/" + grid[1].image);
  const IMAGE_3 = require("../../../img/" + grid[2].image);

  /**
   * Titles
   */
  const TITLE_1 = grid[0].title;
  const TITLE_2 = grid[1].title;
  const TITLE_3 = grid[2].title;

  /**
   * Description
   */
  const DESCRIPTION_1 = grid[0].description;
  const DESCRIPTION_2 = grid[1].description;
  const DESCRIPTION_3 = grid[2].description;

  /**
   * Button Text
   */
  const BTN_TEXT_1 = grid[0].buttonText;
  const BTN_TEXT_2 = grid[1].buttonText;
  const BTN_TEXT_3 = grid[2].buttonText;

  /**
   * Button Icon
   */
  const BTN_ICON_1 = grid[0].buttonIcon;
  const BTN_ICON_2 = grid[1].buttonIcon;
  const BTN_ICON_3 = grid[2].buttonIcon;

  /**
   * Link
   */
  const LINK_1 = grid[0].link;
  const LINK_2 = grid[1].link;
  const LINK_3 = grid[2].link;

  return (
    <div class="grid grid-cols-12 gap-6 justify-center">
      <div className="bg-gray-100 flex flex-col gap-6 lg:gap-8 p-3 lg:p-7 col-span-12 lg:col-span-6 rounded-2xl">
        <div className="p-3 lg:p-5 bg-gray-300 rounded-2xl">
          <Image
            src={IMAGE_1}
            alt="Loading..."
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between gap-6 h-full">
          <div>
            <Text4Xl text={TITLE_1} classes="text-black font-medium" />
            <TextMd
              text={DESCRIPTION_1}
              classes="text-gray-400 font-medium mt-4"
            />
          </div>
          <div>
            <a target="_blank" href={LINK_1} rel="noreferrer">
              <ScaledButton text={BTN_TEXT_1} icon={BTN_ICON_1} />
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <div className="flex flex-col h-full justify-between gap-6">
          <div className="justify-center bg-gray-100 h-full grid grid-cols-12 gap-6 p-3 lg:px-7 lg:py-10 col-span-12 lg:col-span-6 rounded-2xl">
            <div className="p-3 lg:p-5 bg-gray-300 col-span-12 lg:col-span-6 rounded-2xl">
              <Image
                src={IMAGE_2}
                alt="Loading..."
                className="rounded-xl object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-between gap-6 col-span-12 lg:col-span-6">
              <div>
                <TextXl text={TITLE_2} classes="text-black font-medium" />
                <TextMd
                  text={DESCRIPTION_2}
                  classes="text-gray-400 font-medium mt-4"
                />
              </div>
              <a target="_blank" href={LINK_2} rel="noreferrer">
                <ScaledButton
                  text={BTN_TEXT_2}
                  icon={BTN_ICON_2}
                  textColor="black"
                  buttonColor="bg-white"
                />
              </a>
            </div>
          </div>
          <div className="justify-center bg-gray-100 h-full grid grid-cols-12 gap-6 p-3 lg:px-7 lg:py-10 col-span-12 lg:col-span-6 rounded-2xl">
            <div className="p-3 lg:p-5 bg-gray-300 col-span-12 lg:col-span-6 rounded-2xl">
              <Image
                src={IMAGE_3}
                alt="Loading..."
                className="rounded-xl object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-between gap-6 col-span-12 lg:col-span-6">
              <div>
                <TextXl text={TITLE_3} classes="text-black font-medium" />
                <TextMd
                  text={DESCRIPTION_3}
                  classes="text-gray-400 font-medium mt-4"
                />
              </div>
              <a target="_blank" href={LINK_3} rel="noreferrer">
                <ScaledButton
                  text={BTN_TEXT_3}
                  icon={BTN_ICON_3}
                  textColor="black"
                  buttonColor="bg-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
