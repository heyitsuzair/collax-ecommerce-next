import React, { useState } from "react";
import {
  BadgeGroup,
  PlainButton,
  Text3Xl,
  Text4Xl,
  TextMd,
} from "../../commons";

const ProductInfo = ({
  product_title,
  price,
  product_description,
  colors,
  sizes,
  available_qty,
}) => {
  /**
   * State For Selected Color
   */
  const [selectedColor, setSelectedColor] = useState(0);
  /**
   * State For Selected Model
   */
  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <div className="flex flex-col justify-between h-[32rem] gap-3">
      <Text3Xl text={product_title} classes="!text-gray-800 !font-medium" />
      <TextMd
        text={product_description}
        classes="!text-gray-400 !font-normal"
      />
      <Text4Xl text={`$${price}`} classes="!text-black font-semibold" />
      <div className="flex flex-col gap-4">
        <div>
          <TextMd
            text="Colors"
            classes="!text-black mb-2 capitalize font-medium"
          />
          <BadgeGroup
            badgesArray={colors ? colors : []}
            activeBadge={selectedColor}
            onBadgeClick={setSelectedColor}
          />
        </div>
        <div>
          <TextMd
            text="Sizes"
            classes="!text-black mb-2 capitalize font-medium"
          />
          <BadgeGroup
            badgesArray={sizes ? sizes : []}
            activeBadge={selectedSize}
            onBadgeClick={setSelectedSize}
          />
        </div>
      </div>
      <div className="btn-group flex items-center gap-4">
        <PlainButton
          onClick={() => alert("add to cart")}
          text="Add To Cart"
          isDisabled={available_qty < 1}
          textColor="text-black hover:text-white disabled:hover:text-black"
          buttonColor="bg-yellow-300 hover:bg-indigo-500 disabled:hover:bg-yellow-300"
        />
        <PlainButton
          onClick={() => alert("buy now")}
          text="Buy Now"
          isDisabled={available_qty < 1}
          textColor="text-black"
          buttonColor="bg-indigo-400 hover:bg-yellow-300 disabled:hover:bg-indigo-400"
        />
      </div>
    </div>
  );
};

export default ProductInfo;
