import "./style.css";
import Image from "next/image";

export default function Missions() {
  return (
    <div className="missions_section">
      <div className="missions_section_content">
        <div className="missions_section_mission">
          <div className="missions_section_title">
            <h2 className="missions_section_title_text">Ses missions</h2>
          </div>
          <h4 className="missions_section_mission_title">
            Vérifier la bonne constitution de votre dossier PVoC
          </h4>
          <img
            src="/medias/missions_illustrations/dossier_check.png"
            alt="dossier pvoc check"
          />
        </div>

        <div className="missions_section_mission">
          <h4 className="missions_section_mission_title">
            Présenter le dossier à l'organisme certificateur
          </h4>
          <img src="/medias/missions_illustrations/graph.png" alt="graph" />
        </div>

        <div className="missions_section_mission">
          <h4 className="missions_section_mission_title">
            Suivre l'avancée de votre dossier jusqu'à l'édition de votre
            certificat
          </h4>
          <img
            src="/medias/missions_illustrations/eye_track.png"
            alt="eye track"
          />
        </div>

        <div className="missions_section_mission">
          <h4 className="missions_section_mission_title">
            Répondre à vos questions, apporter ses conseils et vous épauler
          </h4>
          <img
            src="/medias/missions_illustrations/q_a.png"
            alt="Question & Answers"
          />
        </div>

        <div className="missions_section_mission">
          <h4 className="missions_section_mission_title">
            Vous communiquer votre certificat au format PDF
          </h4>
          <img
            src="/medias/missions_illustrations/dossier_check2.png"
            alt="Dossier check"
          />
        </div>
      </div>
    </div>
  );
}
