import React from "react";
import { BadgePlain } from "../index";

const BadgeGroup = ({ badgeColor, badgesArray, activeBadge, onBadgeClick }) => {
  /**
   * Badge Background Color
   */
  const bgColor = badgeColor
    ? badgeColor
    : "hover:!bg-yellow-300 cursor-pointer hover:!text-black py-1.5 px-4";

  return (
    <div className="flex gap-3 items-center">
      {badgesArray.map((badge, index) => {
        return (
          <div
            key={index}
            onClick={onBadgeClick ? () => onBadgeClick(index) : null}
          >
            <BadgePlain
              text={badge}
              classes={`${
                activeBadge === index
                  ? "bg-yellow-300 !text-black"
                  : "bg-gray-100 text-gray-500"
              } ${bgColor}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BadgeGroup;
