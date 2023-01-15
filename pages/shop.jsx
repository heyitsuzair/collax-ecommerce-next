import Head from "next/head";
import React from "react";
import { BreadcrumbTopPage } from "../src/components/commons";
import { MainContent } from "../src/components/pages/shop";

const Shop = () => {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta
          name="description"
          content="Ecommerce Shop. Made With Heart By UZAIR"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BreadcrumbTopPage text="Shop" />
      <div className="content">
        <MainContent />
      </div>
    </>
  );
};

export default Shop;
