import styles from "./style.module.css";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function SaleemSaber() {
  const { t } = useTranslation("pvoc_saudi_arabia");
  return (
    <>
      <Head>
        <title>{t("SALEEM/SABER")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follows" />
      </Head>
    </>
  );
}
