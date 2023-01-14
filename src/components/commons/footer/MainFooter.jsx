import Link from "next/link";
import React from "react";
import { Navigation } from "../../../config";
import ScaledButton from "../buttons/ScaledButton";
import { IconHoverable, Logo, Text3Xl, TextLg, TextXl } from "../index";

const MainFooter = () => {
  return (
    <div className="bg-neutral-800 flex flex-col gap-12 lg:gap-28 py-20 px-12 lg:px-32">
      <div className="flex flex-col gap-10 items-center lg:flex-row">
        <Text3Xl
          text="More Than 2 Years Of Professional Experience In Web, Mobile App And CMS Development 🤝"
          classes="font-bold text-center lg:text-start lg:pr-40"
        />
        <div>
          <Link href="/contact">
            <ScaledButton
              text="Contact Me"
              icon="fa fa-arrow-right"
              size="large"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-between flex-col items-center gap-5 lg:gap-10 lg:flex-row border-y py-10 border-neutral-700">
        <div>
          <TextLg
            text="© 2023 Fellow Coders, All Rights Reserved"
            classes="text-center"
          />
        </div>
        <div>
          <ul className="flex gap-6">
            {Navigation.map((nav) => {
              return (
                <Link key={nav.link} href={nav.link}>
                  <TextLg
                    text={nav.text}
                    classes={"font-medium transition-all hover:text-yellow-300"}
                  />
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
        <div className="logo flex items-center gap-4">
          <Logo height="full w-20" />
          <TextXl text="Muhammad Uzair" classes="text-white font-bold" />
        </div>
        <div className="icons flex items-center gap-4">
          <a href="//fb.com/uzair.354123" target="_blank" rel="noreferrer">
            <IconHoverable
              icon="fa fa-brands fa-facebook text-xl"
              classes="w-16 h-16 border-neutral-700 hover:bg-indigo-500 hover:border-indigo-500"
            />
          </a>
          <a
            href="//linkedin.com/in/uzair-dev"
            target="_blank"
            rel="noreferrer"
          >
            <IconHoverable
              icon="fa fa-brands fa-linkedin text-xl"
              classes="w-16 h-16 border-neutral-700 hover:bg-indigo-500 hover:border-indigo-500"
            />
          </a>
          <a
            href="//instagram.com/codewith_uzair"
            target="_blank"
            rel="noreferrer"
          >
            <IconHoverable
              icon="fa fa-brands fa-instagram text-xl"
              classes="w-16 h-16 border-neutral-700 hover:bg-indigo-500 hover:border-indigo-500"
            />
          </a>
          <a href="//github.com/heyitsuzair" target="_blank" rel="noreferrer">
            <IconHoverable
              icon="fa fa-brands fa-github text-xl"
              classes="w-16 h-16 border-neutral-700 hover:bg-indigo-500 hover:border-indigo-500"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
