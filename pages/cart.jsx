import Head from "next/head";
import React from "react";
import { BreadcrumbTopPage } from "../src/components/commons";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta
          name="description"
          content="Ecommerce Cart. Made With Heart By UZAIR"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BreadcrumbTopPage text="Cart" />
      <div className="content"></div>
    </>
  );
};

export default Cart;
