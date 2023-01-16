import Head from "next/head";
import React from "react";
import { BreadcrumbTopPage } from "../src/components/commons";
import { MainContent } from "../src/components/pages/cart";

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
      <div className="content">
        <MainContent />
      </div>
    </>
  );
};

export default Cart;
