import React from "react";

import TextXl from "../text/Text.xl";

const TabsUnderlined = ({ activeTab, tabs, handleTabClick, justify }) => {
  return (
    <div className="tabs">
      <ul className={`flex items-center gap-4 ${justify}`}>
        {tabs.map((tab, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer"
              onClick={() => handleTabClick(index)}
            >
              <TextXl
                text={tab}
                classes={`${
                  activeTab === index ? "text-gray-900" : "text-gray-400"
                } font-bold`}
              />
              <div
                className={`w-full h-1 mt-1.5 ${
                  activeTab === index && "bg-indigo-500"
                }  rounded-full`}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabsUnderlined;
