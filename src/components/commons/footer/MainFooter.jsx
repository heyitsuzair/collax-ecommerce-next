import Link from "next/link";
import React from "react";
import { Navigation } from "../../../config";
import ScaledButton from "../buttons/ScaledButton";
import { Text3Xl, TextLg } from "../index";

const MainFooter = () => {
  return (
    <div className="bg-neutral-800 flex flex-col gap-28 py-20 px-32">
      <div className="flex">
        <Text3Xl
          text="More Than 2 Years Of Professional Experience In Web, Mobile App And CMS Development 🤝"
          classes="font-bold pr-40"
        />
        <div>
          <Link href="/contact">
            <ScaledButton
              text="Available For New Project"
              icon="fa fa-arrow-right"
              size="large"
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-between border-y py-7 border-neutral-700">
        <div>
          <TextLg text="© 2023 Fellow Coders, All Rights Reserved" />
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
    </div>
  );
};

export default MainFooter;
