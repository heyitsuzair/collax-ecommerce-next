import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/slices/cart";
import {
  BadgeGroup,
  PlainButton,
  Text3Xl,
  Text4Xl,
  TextMd,
} from "../../commons";

const ProductInfo = ({
  id,
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
  const [selectedColor, setSelectedColor] = useState(null);
  /**
   * State For Selected Model
   */
  const [selectedSize, setSelectedSize] = useState(null);
  /**
   * State For Is In Cart
   */
  const [isInCart, setIsInCart] = useState(false);

  /**
   * Redux Helper Functions
   */
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  /**
   * @function onAddToCart Triggers When Someone Click On "Add To Cart"
   */
  const onAddToCart = () => {
    const data = {
      product_id: id,
      req_qty: 1,
      price: price,
      size: sizes[selectedSize],
      color: colors[selectedColor],
    };
    /**
     * Trigger "addToCart" function of cart slice
     */
    dispatch(addToCart(data));
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

      /**
       * Find The Selected Color And Make Its Badge Active
       */
      const selectedColor = colors.findIndex(
        (color) => color === isInCart.color
      );
      setSelectedColor(selectedColor);
      /**
       * Find The Selected Size And Make Its Badge Active
       */
      const selectedSize = sizes.findIndex((size) => size === isInCart.size);
      setSelectedSize(selectedSize);
    } else {
      setSelectedColor(0);
      setSelectedSize(0);
    }
  };

  useEffect(() => {
    isAlreadyInCart();
    //eslint-disable-next-line
  }, [cart]);

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
          onClick={() => onAddToCart()}
          text={isInCart ? "Save" : "Add To Cart"}
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
