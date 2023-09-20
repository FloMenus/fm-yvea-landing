import styles from "./style.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Missions() {
  const { t } = useTranslation("support");
  return (
    <div className={styles.missions_section}>
      <div className={styles.missions_section_content}>
        <div className={styles.missions_section_mission}>
          <div className={styles.missions_section_title}>
            <h2 className={styles.missions_section_title_text}>
              {t("Ses missions")}
            </h2>
          </div>
          <h4 className={styles.missions_section_mission_title}>
            {t("Vérifier la bonne constitution de votre dossier PVoC")}
          </h4>
          <Image
            width={200}
            height={200}
            src="/medias/missions_illustrations/dossier_check.png"
            alt="dossier pvoc check"
          />
        </div>

        <div className={styles.missions_section_mission}>
          <h4 className={styles.missions_section_mission_title}>
            {t("Présenter le dossier à l'organisme certificateur")}
          </h4>
          <Image
            width={200}
            height={200}
            src="/medias/missions_illustrations/graph.png"
            alt="graph"
          />
        </div>

        <div className={styles.missions_section_mission}>
          <h4 className={styles.missions_section_mission_title}>
            {t(
              "Suivre l'avancée de votre dossier jusqu'à l'édition de votre certificat"
            )}
          </h4>
          <Image
            width={200}
            height={200}
            src="/medias/missions_illustrations/eye_track.png"
            alt="eye track"
          />
        </div>

        <div className={styles.missions_section_mission}>
          <h4 className={styles.missions_section_mission_title}>
            {t(
              "Répondre à vos questions, apporter ses conseils et vous épauler"
            )}
          </h4>
          <Image
            width={200}
            height={200}
            src="/medias/missions_illustrations/q_a.png"
            alt="Question & Answers"
          />
        </div>

        <div className={styles.missions_section_mission}>
          <h4 className={styles.missions_section_mission_title}>
            {t("Vous communiquer votre certificat au format PDF")}
          </h4>
          <Image
            width={200}
            height={200}
            src="/medias/missions_illustrations/dossier_check2.png"
            alt="Dossier check"
          />
        </div>
      </div>
    </div>
  );
}
