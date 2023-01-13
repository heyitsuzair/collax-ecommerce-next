import Head from "next/head";
import { CreativeDesign, Hero, WhatWeDo } from "../src/components/pages/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Ecommerce Homepage. Made With Heart By UZAIR"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content">
        <Hero />
        <CreativeDesign />
        <WhatWeDo />
      </div>
    </>
  );
}
