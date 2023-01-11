import Link from "next/link";
import React from "react";
import { IconPlain, TextXl } from "../index";

const IconTitled = ({ icon, title, titleLinkExternal, titleLinkInternal }) => {
  return (
    <div className="flex items-center gap-4">
      <IconPlain classes={icon} />
      {titleLinkExternal && (
        <a href={titleLinkExternal}>
          <TextXl
            text={title}
            classes="font-semibold transition-all duration-500 hover:text-yellow-300 tracking-wider"
          />
        </a>
      )}
      {titleLinkInternal && (
        <Link href={titleLinkInternal}>
          <TextXl
            text={title}
            classes="font-semibold transition-all duration-500 hover:text-yellow-300 tracking-wider"
          />
        </Link>
      )}
      {!titleLinkInternal && !titleLinkExternal && (
        <TextXl
          text={title}
          classes="font-semibold transition-all duration-500 tracking-wider"
        />
      )}
    </div>
  );
};

export default IconTitled;
