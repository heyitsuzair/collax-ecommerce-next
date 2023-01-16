import React, { useState } from "react";
import {
  BadgeGroup,
  PlainButton,
  Text3Xl,
  Text4Xl,
  TextMd,
} from "../../commons";

const ProductInfo = () => {
  /**
   * State For Selected Color
   */
  const [selectedColor, setSelectedColor] = useState(0);
  /**
   * State For Selected Model
   */
  const [selectedSize, setSelectedSize] = useState(0);

  const colors = ["Green", "Red", "Blue"];

  const sizes = ["S", "M", "L"];

  return (
    <div className="flex flex-col justify-between h-[32rem] gap-3">
      <Text3Xl text="Product Title" classes="!text-gray-800 !font-medium" />
      <TextMd
        text="Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        classes="!text-gray-400 !font-normal"
      />
      <Text4Xl text="$80" classes="!text-black font-semibold" />
      <div className="flex flex-col gap-4">
        <div>
          <TextMd text="Colors" classes="!text-black mb-2 font-medium" />
          <BadgeGroup
            badgesArray={colors}
            activeBadge={selectedColor}
            onBadgeClick={setSelectedColor}
          />
        </div>
        <div>
          <TextMd text="Sizes" classes="!text-black mb-2 font-medium" />
          <BadgeGroup
            badgesArray={sizes}
            activeBadge={selectedSize}
            onBadgeClick={setSelectedSize}
          />
        </div>
      </div>
      <div className="btn-group flex items-center gap-4">
        <PlainButton
          onClick={() => alert("add to cart")}
          text="Add To Cart"
          textColor="text-black hover:text-white"
          buttonColor="bg-yellow-300 hover:bg-indigo-500"
        />
        <PlainButton
          onClick={() => alert("add to cart")}
          text="Buy Now"
          textColor="text-black"
          buttonColor="hover:bg-yellow-300 bg-indigo-400"
        />
      </div>
    </div>
  );
};

export default ProductInfo;
