import Head from "next/head";
import React, { useState } from "react";
import { BreadcrumbTopPage, SpinnerLarge } from "../src/components/commons";
import { MainContent } from "../src/components/pages/shop";
import { getProducts } from "../src/functions/products";

const Shop = ({ products }) => {
  const [productsData, setProductsData] = useState(products);

  /**
   * @function fetchNextData Fetch Data When Visitor Reaches Infinite Scroll End
   */
  const fetchNextData = async () => {
    const pageNo = productsData.meta.pagination.page + 1;
    const products = await getProducts(pageNo);
    const newData = {
      data: [...productsData.data, ...products.data],
      meta: products.meta,
    };
    setProductsData(newData);
  };

  /**
   * Main Content Props
   */
  const MainContentProps = {
    products: productsData.data,
    meta: productsData.meta,
    fetchNextData: fetchNextData,
  };

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
      {!products ? (
        <div className="text-center my-32">
          <SpinnerLarge />
        </div>
      ) : (
        <div className="content">
          <MainContent {...MainContentProps} />
        </div>
      )}
    </>
  );
};

Shop.getInitialProps = async () => {
  const products = await getProducts(1);

  return { products };
};

export default Shop;
