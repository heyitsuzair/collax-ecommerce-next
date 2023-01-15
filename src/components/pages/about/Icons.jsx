import React from "react";
import { socialLinks } from "../../../config";
import { IconHoverable } from "../../commons";

const Icons = () => {
  return (
    <div className="icons flex flex-row lg:flex-col items-center gap-4">
      {socialLinks.map((link) => {
        return (
          <a key={link.link} href={link.link} target="_blank" rel="noreferrer">
            <IconHoverable
              icon={`fa fa-brands ${link.icon} text-xl`}
              classes="!w-14 !h-14 bg-indigo-700"
            />
          </a>
        );
      })}
    </div>
  );
};

export default Icons;
