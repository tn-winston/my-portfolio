import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
import { inter, dancingScript } from "../styles/fonts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Winston&apos;s Portfolio</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light">
        <div
          className={`${inter.variable} ${dancingScript.variable} bg-light-theme font-inter text-xs text-neutral-700 dark:bg-dark-theme dark:text-neutral-200 md:text-sm lg:text-base`}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ThemeProvider>
    </>
  );
}
