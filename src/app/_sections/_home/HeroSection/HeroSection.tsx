import styles from "./style.module.css";

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_left}>
        <div>
          <h2 className={styles.hero_title}>L'export enfin accessible !</h2>
          <h3 className={styles.hero_subtitle}>
            YVEA, votre assistant administratif de l'exportation qui ira au-delà
            des attentes.
          </h3>
        </div>
        <div className={styles.hero_button_container}>
          <button className={styles.hero_button}>
            <span className={styles.hero_button_text}>Pré-inscription</span>
          </button>
        </div>
      </div>
      <div className={styles.hero_right}>
        <img src="/medias/earth.svg" alt="earth" />
      </div>
    </div>
  );
}
