import Head from "next/head";
import React from "react";
import { BreadcrumbTopPage } from "../src/components/commons";
import { MainContent } from "../src/components/pages/Checkout";

const Checkout = () => {
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
