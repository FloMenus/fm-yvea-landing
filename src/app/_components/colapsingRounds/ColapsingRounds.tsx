"use client";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../useOnScreen/UseOnScreen";

export default function ColapsingRounds() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const [colapsed, setColapsed] = useState(false);

  useEffect(() => {
    isVisible && setColapsed(true);
  }, [isVisible]);

  return (
    <>
      <div className="colapsing-rounds">
        {/* <div className="colapsing-round-container"> */}
        <div
          className={`colapsing-round
        ${colapsed ? "colapsed-round" : ""}`}
        >
          <img
            className="colapsing-round-img"
            src="/medias/icons/folder.png"
            alt="round"
          />
          <h5 className={`colapsing-round-title ${colapsed ? "show" : ""}`}>
            Créez facilement vos dossiers
          </h5>
          <p className={`colapsing-round-text ${colapsed ? "show" : ""}`}>
            Dites adieu aux PDF et aux plateformes complexes. Créez rapidement
            et facilement des dossiers complets, peu importe votre niveau de
            compétence.
            <br />
            <br />
            Économisez du temps et des efforts grâce à une interface intuitive
            et des fonctionnalités avancées.
          </p>
        </div>
        <div
          className={`colapsing-round
        ${colapsed ? "colapsed-round" : ""}`}
        >
          <img
            className="colapsing-round-img"
            src="/medias/icons/clock.png"
            alt="round"
          />
          <h5 className={`colapsing-round-title ${colapsed ? "show" : ""}`}>
            Gagnez du temps précieux
          </h5>
          <p className={`colapsing-round-text ${colapsed ? "show" : ""}`}>
            Nous nous chargeons de présenter votre dossier à l'organisme de
            certification et assurons un suivi rigoureux à chaque étape du
            processus.
            <br />
            <br />
            Ainsi, vous pouvez récupérer votre précieux temps et vous concentrer
            sur vos activités principales.
          </p>
        </div>
        <div
          className={`colapsing-round
        ${colapsed ? "colapsed-round" : ""}`}
        >
          <img
            className="colapsing-round-img"
            src="/medias/icons/chart.png"
            alt="round"
          />
          <h5 className={`colapsing-round-title ${colapsed ? "show" : ""}`}>
            Rassemblez tout au même endroit{" "}
          </h5>
          <p className={`colapsing-round-text ${colapsed ? "show" : ""}`}>
            Tous les pays, tous vos dossiers, toutes vos informations et
            documents accessibles facilement depuis votre espace client
            sécurisé.
          </p>
        </div>
      </div>
      <div ref={ref} className="breakpoint"></div>
    </>
  );
}
