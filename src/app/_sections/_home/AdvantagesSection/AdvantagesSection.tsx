import styles from "./style.module.css";

import ColapsingRounds from "../../../_components/colapsingRounds/ColapsingRounds";

export default function AdvantagesSection() {
  return (
    <div className={styles.advantages_container}>
      <h4 className={styles.advantages_title}>
        Obtenez des résultats de qualité avec moins d'effort dans vos démarches
        administratives à l'export !
      </h4>
      <div className={styles.advantages_paragraphs_wrapper}>
        <p className={styles.advantages_paragraph}>
          Découvrez la première plateforme tout-en-un pour faciliter la mise en
          conformité de vos expéditions vers l’Afrique et le Moyen-Orient.
        </p>
        <p className={styles.advantages_paragraph}>
          Gagnez du temps sur vos tâches administratives et concentrez-vous sur
          votre coeur de métier pour atteindre de nouveaux marchés en toute
          sérénité.
        </p>
      </div>
      <ColapsingRounds />
    </div>
  );
}
