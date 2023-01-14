import Head from "next/head";
import React from "react";
import { BreadcrumbTopPage } from "../src/components/commons";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Ecommerce About. Made With Heart By UZAIR"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BreadcrumbTopPage text="About" />
      <div className="content"></div>
    </>
  );
};

export default About;
