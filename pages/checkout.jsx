import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BreadcrumbTopPage } from "../src/components/commons";
import { MainContent } from "../src/components/pages/checkout";

const Checkout = () => {
  const router = useRouter();
  /**
   * Redux Helper functions
   */
  const cart = useSelector((store) => store.cart);
  /**
   * @function isCartEmpty Check Whether The Cart Is Empty
   * @true Throw User Back From Where He Came
   * @false Continue
   */
  const isCartEmpty = () => {
    if (cart.cartItems.length < 1) {
      router.back();
    }
  };

  useEffect(() => {
    isCartEmpty();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta
          name="description"
          content="Ecommerce Checkout. Made With Heart By UZAIR"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BreadcrumbTopPage text="Checkout" />
      <div className="content">
        <MainContent />
      </div>
    </>
  );
};

export default Checkout;
