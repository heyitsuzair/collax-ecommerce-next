import Head from "next/head";
import React from "react";
import { BreadcrumbTopPage } from "../src/components/commons";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Ecommerce Contacy. Made With Heart By UZAIR"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BreadcrumbTopPage text="Contact" />
      <div className="content"></div>
    </>
  );
};

export default Contact;
