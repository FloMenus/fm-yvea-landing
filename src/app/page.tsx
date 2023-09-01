import styles from "./page.module.css";
import Carousel from "./_components/carousel/Carousel";
import ColapsingRounds from "./_components/colapsingRounds/ColapsingRounds";

import HeroSection from "./_sections/_home/HeroSection/HeroSection";
import CarouselSection from "./_sections/_home/CarouselSection/CarouselSection";
import AdvantagesSection from "./_sections/_home/AdvantagesSection/AdvantagesSection";
import ObjectivesSection from "./_sections/_home/ObjectivesSection/ObjectivesSection";
import ApplicationSection from "./_sections/_home/ApplicationSection/ApplicationSection";
import ReviewsSection from "./_sections/ReviewsSection/ReviewsSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <CarouselSection />
      <AdvantagesSection />
      <ObjectivesSection />
      <ApplicationSection />
      <ReviewsSection />
    </main>
  );
}
