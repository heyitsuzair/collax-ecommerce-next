import React from "react";
import Text2Xl from "../text/Text.2xl";
import TextMd from "../text/Text.md";
import TextXl from "../text/Text.xl";

const TabsUnderlined = () => {
  return (
    <div className="tabs">
      <ul>
        <li>
          <Text2Xl text="Creative work" classes={"text-gray-900 font-bold"} />
        </li>
      </ul>
    </div>
  );
};

export default TabsUnderlined;
