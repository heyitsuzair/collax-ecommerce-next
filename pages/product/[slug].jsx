import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { BreadcrumbTopPage } from "../../src/components/commons";
import { MainContent } from "../../src/components/pages/product";

const Slug = () => {
  /**
   * @param {string}
   */
  const { query } = useRouter();
  const { slug } = query;

  return (
    <>
      <Head>
        <title>Product Details</title>
        <meta
          name="description"
          content="Ecommerce Product Details. Made With Heart By UZAIR"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BreadcrumbTopPage text="Product Details" />
      <div className="content">
        <MainContent />
      </div>
    </>
  );
};

export default Slug;
