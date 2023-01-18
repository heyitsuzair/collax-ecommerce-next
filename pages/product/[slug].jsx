import Head from "next/head";
import React from "react";
import { BreadcrumbTopPage } from "../../src/components/commons";
import { MainContent } from "../../src/components/pages/product";
import { getProduct, getRelatedProducts } from "../../src/functions/products";

const Slug = ({ product, products }) => {
  /**
   * Main Content Props
   */
  const MainContentProps = {
    product: product ? product.data[0].attributes : [],
    products: products.data,
  };

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
        <MainContent {...MainContentProps} />
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { slug } = query;

  const product = await getProduct(slug);

  const products = await getRelatedProducts(slug);

  return { props: { product, products } };
}

export default Slug;
