import styles from "./page.module.css";
import Carousel from "../_components/carousel/Carousel";
import ColapsingRounds from "../_components/colapsingRounds/ColapsingRounds";
import Head from "next/head";

import HeroSection from "../_sections/_home/HeroSection/HeroSection";
import CarouselSection from "../_sections/_home/CarouselSection/CarouselSection";
import AdvantagesSection from "../_sections/_home/AdvantagesSection/AdvantagesSection";
import ObjectivesSection from "../_sections/_home/ObjectivesSection/ObjectivesSection";
import ApplicationSection from "../_sections/_home/ApplicationSection/ApplicationSection";
import ReviewsSection from "../_sections/ReviewsSection/ReviewsSection";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("head");
  return (
    <>
      <Head>
        <title>{t("Accueil - YVEA")}</title>
        <meta name="description" content="Yvea homepage" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follows" />
      </Head>
      <main className={styles.main}>
        <HeroSection />
        <CarouselSection />
        <AdvantagesSection />
        <ObjectivesSection />
        <ApplicationSection />
        <ReviewsSection />
      </main>
    </>
  );
}
