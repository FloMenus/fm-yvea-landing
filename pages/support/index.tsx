import Head from "next/head";
import { useTranslation } from "react-i18next";

import SupportHeader from "../../_sections/_support/SupportHeader/SupportHeader";
import Missions from "../../_sections/_support/Missions/Missions";
import ContactSection from "../../_sections/ReviewsSection/ReviewsSection";

export default function SupportPage() {
  const { t } = useTranslation("support");
  return (
    <>
      <Head>
        <title>{t("Accompagnement")} - YVEA</title>
        <meta name="description" content="Yvea - Support" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follows" />
      </Head>

      <SupportHeader />
      <Missions />
      <ContactSection />
    </>
  );
}
