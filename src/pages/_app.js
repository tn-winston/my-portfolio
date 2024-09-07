import "@/styles/globals.css";
import Head from "next/head";
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
          className={`${inter.variable} ${dancingScript.variable} m-auto max-w-[1920px] bg-light-theme font-inter text-sm text-neutral-700 dark:bg-dark-theme dark:text-neutral-200 lg:text-base`}
        >
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
