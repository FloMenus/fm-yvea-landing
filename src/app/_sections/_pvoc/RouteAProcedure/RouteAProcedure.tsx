import "./style.css";
import { RouteAProcedureData } from "./data";
import Image from "next/image";

export default function RouteAProcedure() {
  return (
    <div className="routeA_section">
      <h4 className="routeA_section_title">La procédure classique (Route A)</h4>
      <br />
      <div className="routeA_section_paragraph_section">
        <p className="routeA_section_paragraph">
          Chaque destination d'importation a mandaté un ou plusieurs organismes
          certificateurs pour vous accompagner dans la mise en conformité de vos
          expéditions. Par exemple : ApPlus, Bureau Veritas, Cotecna, Intertek,
          QIMA, SGS, TUV, etc.
          <br />
          <br />
          La procédure la plus courante, appelée « Route A », se divise en trois
          étapes à valider :
        </p>
      </div>
      <div className="routeA_section_steps">
        <div className="routeA_section_steps_timeline">
          {RouteAProcedureData.map((step) => (
            <div className="routeA_section_step" key={step.title}>
              <Image
                width={39}
                height={39}
                className="routeA_section_step_circle"
                src="/medias/shapes/circle.svg"
                alt="step"
              />
            </div>
          ))}
          <Image
            width={855}
            height={17}
            className="routeA_section_steps_timeline_line"
            src="/medias/shapes/line.svg"
            alt="arrow"
          />
        </div>
        {/* SQUARES */}
        <div className="routeA_section_step_squares">
          <div className="routeA_section_step_square">
            <div className="routeA_section_step_square_number">1</div>
            <h5 className="routeA_section_step_title">Revue documentaire</h5>
            <div className="routeA_section_step_paragraph">
              <p>
                Voici la liste des documents nécessaires pour l'ouverture du
                dossier :
              </p>
              <ul className="routeA_section_step_paragraph_list">
                <li>Proforma ou facture finale</li>
                <li>Fiche descriptive pour chaque code de nomenclature</li>
                <li>
                  Rapports de test ou certificats d'analyse pour chaque code de
                  nomenclature
                </li>
                <li>Certificat de qualité ISO 9001 ou équivalent</li>
                <li>
                  Déclaration d'importation à demander à votre acheteur (selon
                  la destination)
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="routeA_section_step_square">
            <div className="routeA_section_step_square_number">2</div>
            <div className="routeA_section_step_paragraph">
              <h5 className="routeA_section_step_title">
                Inspection de la marchandise
              </h5>
              <p>
                Les inspections peuvent être effectuées dans l'un des lieux
                suivants : entrepôt, hangar ou chez le transitaire.
              </p>
              <br />
              <p>
                Le lieu d'inspection peut être situé n'importe où dans le monde,
                à l'exception du pays de destination.
              </p>
              <br />
              <p>
                De plus en plus d'organismes proposent des inspections par
                visioconférence. Nous vous recommandons vivement d'opter pour
                cette option, qui vous permet d'obtenir une date plus
                rapidement.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="routeA_section_step_square">
            <div className="routeA_section_step_square_number">3</div>
            <div className="routeA_section_step_paragraph">
              <h5 className="routeA_section_step_title">
                Validation du certificat
              </h5>
              <p>
                Une fois les étapes 1 et 2 validées, l'organisme de
                certification nous enverra votre certificat pour vérification et
                validation
              </p>
              <br />
              <p>
                Le lieu d'inspection peut être situé n'importe où dans le monde,
                à l'exception du pays de destination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
