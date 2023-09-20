import styles from "./styles.module.css";
import Earth from "../../../_components/earth/Earth";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation("common");
  return (
    <div className={styles.hero}>
      <div className={styles.hero_left}>
        <div>
          <h2 className={styles.hero_title}>
            {t("L'export enfin accessible !")}
          </h2>
          <h3 className={styles.hero_subtitle}>
            {t(
              "YVEA, votre assistant administratif de l'exportation qui ira au-delà des attentes."
            )}
          </h3>
        </div>
        <div className={styles.hero_button_container}>
          <Link
            href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSemoVIH-3smSe3CnBAoQvMzHLSzsl8Sh69O7Ajv1ofWq6fqyA/viewform"
            target="_blank"
            className={styles.hero_button}
          >
            <span className={styles.hero_button_text}>
              {t("Pré-inscription")}
            </span>
          </Link>
        </div>
      </div>
      <div className={styles.hero_right}>
        <Earth />
      </div>
    </div>
  );
}
