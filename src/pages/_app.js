import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Winston's Portfolio</title>
      </Head>
      <div className="w-full bg-light-theme font-montserrat text-neutral-700">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
