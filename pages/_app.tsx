import Navbar from "../_components/navbar/Navbar";
import Footer from "../_components/footer/Footer";
import { ni18nConfig } from "../ni18n.config";
import { appWithI18Next } from "ni18n";
import Head from "next/head";
import "./globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link rel="icon" href="/fm-yvea-landing/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follows" />
      </Head>
      <div className="app">
        <Navbar />
        <div className="main_content">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default appWithI18Next(MyApp, ni18nConfig);
