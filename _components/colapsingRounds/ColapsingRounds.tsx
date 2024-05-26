"use client";
import styles from "./style.module.css";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../useOnScreen/UseOnScreen";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ColapsingRounds() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const [colapsed, setColapsed] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    isVisible && setColapsed(true);
  }, [isVisible]);

  return (
    <>
      <div className={styles.colapsing_rounds}>
        {/* <div className="colapsing-round-container"> */}
        <div
          className={`${styles.colapsing_round}
        ${colapsed ? styles.colapsed_round : ""}`}
        >
          <Image
            height={70}
            width={70}
            src="/medias/icons/folder.png"
            alt="round"
          />
          <h5
            className={`${styles.colapsing_round_title} ${
              colapsed ? styles.show : ""
            }`}
          >
            {t("Créez facilement vos dossiers")}
          </h5>
          <p
            className={`${styles.colapsing_round_text} ${
              colapsed ? styles.show : ""
            }`}
          >
            {t(
              "Dites adieu aux PDF et aux plateformes complexes. Créez rapidement et facilement des dossiers complets, peu importe votre niveau de compétence."
            )}
            <br />
            <br />
            {t(
              "Économisez du temps et des efforts grâce à une interface intuitive et des fonctionnalités avancées."
            )}
          </p>
        </div>
        <div
          className={`${styles.colapsing_round}
        ${colapsed ? styles.colapsed_round : ""}`}
        >
          <Image
            height={70}
            width={70}
            src="/medias/icons/clock.png"
            alt="round"
          />
          <h5
            className={`${styles.colapsing_round_title} ${
              colapsed ? styles.show : ""
            }`}
          >
            {t("Gagnez du temps précieux")}
          </h5>
          <p
            className={`${styles.colapsing_round_text} ${
              colapsed ? styles.show : ""
            }`}
          >
            {t(
              "Nous nous chargeons de présenter votre dossier à l'organisme de certification et assurons un suivi rigoureux à chaque étape du processus."
            )}
            <br />
            <br />
            {t(
              "Ainsi, vous pouvez récupérer votre précieux temps et vous concentrer sur vos activités principales."
            )}
          </p>
        </div>
        <div
          className={`${styles.colapsing_round}
        ${colapsed ? styles.colapsed_round : ""}`}
        >
          <Image
            height={70}
            width={70}
            src="/medias/icons/chart.png"
            alt="round"
          />
          <h5
            className={`${styles.colapsing_round_title} ${
              colapsed ? styles.show : ""
            }`}
          >
            {t("Rassemblez tout au même endroit")}
          </h5>
          <p
            className={`${styles.colapsing_round_text} ${
              colapsed ? styles.show : ""
            }`}
          >
            {t(
              "Tous les pays, tous vos dossiers, toutes vos informations et documents accessibles facilement depuis votre espace client sécurisé."
            )}
          </p>
        </div>
      </div>
      <div ref={ref} className="breakpoint"></div>
    </>
  );
}
