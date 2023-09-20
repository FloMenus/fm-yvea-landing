import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import Carousel from "../../../_components/carousel/Carousel";

export default function CarouselSection() {
  const { t } = useTranslation();
  return (
    <div className={styles.carousel_container}>
      <h4 className={styles.carousel_title}>
        {t("Adopté et approuvé par vos pairs")}
      </h4>
      <div className={styles.carousel_wrapper}>
        <Carousel />
      </div>
    </div>
  );
}
