import styles from "./layout.module.css";
import { Inter, Nunito_Sans } from "next/font/google";
import Navbar from "../_components/navbar/Navbar";
import Footer from "../_components/footer/Footer";
import Head from "next/head";
import { ni18nConfig } from "../ni18n.config";

const inter = Inter({ subsets: ["latin"] });
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <Head>
        <link rel="icon" href="/fm-yvea-landing/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follows" />
      </Head>
      <body className={nunito_sans.className}>
        <Navbar />
        <div className={styles.main_content}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
