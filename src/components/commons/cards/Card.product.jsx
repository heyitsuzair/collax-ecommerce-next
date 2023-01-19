import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, buyNow, clearCart } from "../../../redux/slices/cart";
import { IconHoverable, TextMd, TextXl } from "../../commons";

const CardProduct = ({
  id,
  product_image,
  slug,
  product_title,
  price,
  sizes,
  colors,
  available_qty,
  product_description,
}) => {
  const [isCardHover, setIsCardHover] = useState(false);
  const router = useRouter();

  /**
   * Redux Helper functions
   */
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  /**
   * State For Is In Cart
   */
  const [isInCart, setIsInCart] = useState(false);

  /**
   * Const Product Image
   */
  const PRODUCT_IMAGE = product_image.data.attributes.url;

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

  /**
   * @function onAddToCart Triggers When Someone Click On "Basket" Icon
   */
  const onAddToCart = () => {
    /**
     * Check If Product Is In Cart Than Redirect It To Its Detail Page
     */
    if (isInCart) {
      router.push(`/product/${slug}`);
      return;
    }
    const data = {
      product_id: id,
      product_info: {
        product_image: product_image.data.attributes.url,
        product_title,
        slug,
        price,
        product_description,
        available_qty,
      },
      req_qty: 1,
      size: sizes[0],
      color: colors[0],
    };
    /**
     * Trigger "addToCart" function of cart slice
     */
    dispatch(addToCart(data));
  };

  /**
   * @function onBuyNow Triggers When Someone Click On "Buy Now"
   */
  const onBuyNow = () => {
    const data = {
      product_id: id,
      product_info: {
        product_image: product_image.data.attributes.url,
        product_title,
        slug,
        price,
        product_description,
        available_qty,
      },
      req_qty: 1,
      size: sizes[0],
      color: colors[0],
    };
    /**
     * Trigger "clearCart" function of cart slice
     */
    dispatch(clearCart());
    /**
     * Trigger "buyNow" function of cart slice
     */
    dispatch(buyNow(data));

    router.push("/checkout");
  };

  /**
   * @function isAlreadyInCart Check if the product is already in cart
   */
  const isAlreadyInCart = () => {
    /**
     * Find By ID
     */
    const isInCart = cart.cartItems.find((item) => item.product_id === id);

    if (isInCart) {
      setIsInCart(true);
    }
  };

  useEffect(() => {
    isAlreadyInCart();
    //eslint-disable-next-line
  }, [cart]);

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
          disabled={available_qty < 1}
          type="button"
          onClick={() => onAddToCart()}
          className={` ${
            isCardHover
              ? "mt-0 opacity-100 disabled:opacity-60"
              : "mt-56 opacity-0"
          } transition-all duration-500 ease-in-out`}
        >
          <IconHoverable
            icon={`fa ${
              isInCart ? "fa fa-pencil" : "fa-shopping-basket"
            } text-sm`}
            classes="!w-12 !h-12 !bg-yellow-400 !border-yellow-400 hover:!bg-indigo-500 hover:!border-indigo-500"
          />
        </button>
        <button
          disabled={available_qty < 1}
          type="button"
          onClick={() => onBuyNow()}
          className={` ${
            isCardHover
              ? "mt-0 opacity-100 disabled:opacity-60"
              : "mt-56 opacity-0"
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
        <Link href={`/product/${slug}`}>
          <TextXl
            text={product_title}
            classes="!text-black hover:!text-indigo-500 transition-all font-medium text-center md:min-h-[5.5rem] md:max-h-[5.5rem] lg:min-h-[4rem] lg:max-h-[4rem]"
          />
        </Link>
        <TextMd
          text={`$${price}`}
          classes="!text-gray-500 font-medium mt-2 text-center"
        />
      </div>
    </div>
  );
};

export default CardProduct;
