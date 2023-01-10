import Head from "next/head";
import ScaledButton from "../src/components/ScaledButton";

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
      <div className="mt-40">
        <ScaledButton
          text="Add To Cart"
          onClick={() => alert("helo")}
          size="medium"
        />
      </div>
    </>
  );
}
