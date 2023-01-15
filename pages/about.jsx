import Head from "next/head";
import React from "react";
import { BreadcrumbTopPage } from "../src/components/commons";
import { MainContent } from "../src/components/pages/about";

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="Ecommerce About. Made With Heart By UZAIR"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BreadcrumbTopPage text="Muhammad Uzair" />
      <div className="content">
        <MainContent />
      </div>
    </>
  );
};

export default About;
