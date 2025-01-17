import type { AppProps } from 'next/app';

import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Generated by create next app" />
        <link rel="manifest" href="manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <title>Create Next App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
