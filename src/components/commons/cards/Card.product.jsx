import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { IconHoverable, TextMd, TextXl } from "../../commons";

const CardProduct = () => {
  const [isCardHover, setIsCardHover] = useState(false);

  /**
   * Const Product Image
   */
  const PRODUCT_IMAGE = "/img/port1.png";

  /**
   * Capture On Card Mouse Enter
   */
  const onCardMouseEnter = () => {
    setIsCardHover(true);
  };
  /**
   * Capture On Card Mouse Leave
   */
  const onCardMouseLeave = () => {
    setIsCardHover(false);
  };

  return (
    <div
      className="product-card px-3.5 sm:px-0 relative flex flex-col items-center gap-7"
      onMouseEnter={onCardMouseEnter}
      onMouseLeave={onCardMouseLeave}
    >
      <div
        className={`overlay absolute flex gap-4 items-center justify-center top-0 w-[92%] sm:w-full h-72 transition-all duration-500 ${
          isCardHover && "bg-[rgba(0,0,0,0.4)]"
        }`}
      >
        <button
          type="button"
          className={` ${
            isCardHover ? "mt-0 opacity-100" : "mt-56 opacity-0"
          } transition-all duration-500 ease-in-out`}
        >
          <IconHoverable
            icon={`fa fa-shopping-basket text-sm`}
            classes="!w-12 !h-12 !bg-yellow-400 !border-yellow-400 hover:!bg-indigo-500 hover:!border-indigo-500"
          />
        </button>
        <button
          type="button"
          className={` ${
            isCardHover ? "mt-0 opacity-100" : "mt-56 opacity-0"
          } transition-all duration-500 ease-in-out`}
        >
          <IconHoverable
            icon={`fa fa-shopping-cart text-sm`}
            classes="!w-12 !h-12 !bg-yellow-400 !border-yellow-400 hover:!bg-indigo-500 hover:!border-indigo-500"
          />
        </button>
      </div>
      <Image
        unoptimized
        src={PRODUCT_IMAGE}
        width={100}
        height={100}
        alt="Loading..."
        className="w-full h-72 object-cover"
      />
      <div>
        <Link href="/product/1">
          <TextXl
            text="Product Name,Product NameProduct Name"
            classes="!text-black hover:!text-indigo-500 transition-all font-medium text-center md:min-h-[5.5rem] md:max-h-[5.5rem] lg:min-h-[4rem] lg:max-h-[4rem]"
          />
        </Link>
        <TextMd
          text="$400"
          classes="!text-gray-500 font-medium mt-2 text-center"
        />
      </div>
    </div>
  );
};

export default CardProduct;
