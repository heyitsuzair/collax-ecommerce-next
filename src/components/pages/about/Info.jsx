import React from "react";
import { Text3Xl, TextLg, TextMd, TextSm } from "../../commons";

const Info = () => {
  return (
    <div className="flex flex-col gap-7">
      <div>
        <Text3Xl text="Muhammad Uzair" classes="!text-black font-medium" />
        <TextSm text="Software Engineer" classes="!text-indigo-500 mt-2" />
      </div>
      <TextMd
        text="I Am A Software Engineer Having Experience Of Over 2 Years In Web And Mobile App Development Industry Including WordPress Development, Designing And Many More...."
        classes="!text-gray-400"
      />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <TextLg classes="!text-black font-semibold" text="Expertise:" />
          <TextLg classes="!text-gray-400" text="Web/Mobile/WordPress" />
        </div>
        <div className="flex items-center gap-2">
          <TextLg classes="!text-black font-semibold" text="Experience:" />
          <TextLg classes="!text-gray-400" text="2 Years" />
        </div>
        <div>
          <a
            href="mailto:uzairdeveloper354123@gmail.com"
            className="flex items-center gap-2"
          >
            <TextLg classes="!text-black font-semibold" text="Email:" />
            <TextLg
              classes="!text-gray-400 transition-all hover:!text-indigo-500"
              text="uzairdeveloper354123@gmail.com"
            />
          </a>
        </div>
        <div>
          <a
            href="//github.com/heyitsuzair"
            target="_blank"
            className="flex items-center gap-2"
            rel="noreferrer"
          >
            <TextLg classes="!text-black font-semibold" text="Github:" />
            <TextLg
              classes="!text-gray-400 transition-all hover:!text-indigo-500"
              text="heyitsuzair"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
