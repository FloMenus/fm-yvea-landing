import Head from "next/head";

import { useTranslation } from "react-i18next";
import Pricing from "../../_sections/_pricing/Pricing";
import ContactSection from "../../_sections/ReviewsSection/ReviewsSection";

export default function PricingPage() {
  const { t } = useTranslation("pricing");
  return (
    <>
      <Head>
        <title>{t("Tarifs")} - YVEA</title>
        <meta name="description" content="Yvea - Pricing" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follows" />
      </Head>

      <Pricing />
    </>
  );
}
