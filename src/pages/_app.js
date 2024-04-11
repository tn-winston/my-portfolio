import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Winston&apos;s Portfolio</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light">
        <div className="w-full bg-light-theme font-montserrat text-neutral-700 dark:bg-dark-theme dark:text-neutral-200">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ThemeProvider>
    </>
  );
}
