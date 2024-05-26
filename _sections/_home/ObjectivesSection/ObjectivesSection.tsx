import styles from "./style.module.css";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ObjectivesSection() {
  const { t } = useTranslation();
  return (
    <div className={styles.objectives_container}>
      <div className={styles.objective}>
        <h4 className={styles.objective_title}>
          {t(
            "Notre Mission : Simplifier vos échanges commerciaux internationaux grâce à l’automatisation et à l’innovation"
          )}
        </h4>
        <div className={styles.objective_paragraph_and_img}>
          <p className={styles.objective_paragraph}>
            {t(
              "Chez YVEA, notre mission est de rendre l’exportation accessible à tous en simplifiant les procédures administratives grâce l’automatisation et en proposant des solutions innovantes pour répondre aux besoins spécifiques des entreprises."
            )}
            <br />
            <br />
            {t(
              "Nous croyons que les contraintes administratives ne devraient pas être un frein au développement des entreprises à l’échelle mondiale. Nous nous engageons donc à fluidifier les échanges commerciaux internationaux en proposant des solutions efficaces et accessibles."
            )}
          </p>
          <Image
            className={styles.objective_img}
            width={300}
            height={300}
            src="/medias/goal.png"
            alt="goal illustration"
          />
        </div>
      </div>
      <div className={styles.objective}>
        <h4 className={`${styles.objective_title} ${styles.text_right}`}>
          {t("Notre devoir : La protection de vos données")}
        </h4>
        <div className={styles.objective_paragraph_and_img}>
          <Image
            className={styles.objective_img}
            width={300}
            height={300}
            src="/medias/shield.png"
            alt="shield illustration"
          />
          <p className={`${styles.objective_paragraph} ${styles.text_right}`}>
            {t(
              "Conforme au RGPD, nous sommes en constante amélioration de notre sécurité pour garantir une protection optimale de vos données."
            )}
            <br />
            <br />
            {t("Consultez notre politique de confidentialité")}
            <a
              id="privacy_policy"
              href="/contracts/privacy-policy"
              target="_blank"
            >
              {" "}
              {t("ici")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
