import styles from "./style.module.css";

import Carousel from "../../../_components/carousel/Carousel";

export default function CarouselSection() {
  return (
    <div className={styles.carousel_container}>
      <h4 className={styles.carousel_title}>
        Adopté et approuvé par vos pairs
      </h4>
      <div className={styles.carousel_wrapper}>
        <Carousel />
      </div>
    </div>
  );
}
