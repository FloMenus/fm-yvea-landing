import "./style.css";
import Earth from "../../../_components/earth/Earth";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="hero_left">
        <div>
          <h2 className="hero_title">L'export enfin accessible !</h2>
          <h3 className="hero_subtitle">
            YVEA, votre assistant administratif de l'exportation qui ira au-delà
            des attentes.
          </h3>
        </div>
        <div className="hero_button_container">
          <Link
            href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSemoVIH-3smSe3CnBAoQvMzHLSzsl8Sh69O7Ajv1ofWq6fqyA/viewform"
            target="_blank"
            className="hero_button"
          >
            <span className="hero_button_text">Pré-inscription</span>
          </Link>
        </div>
      </div>
      <div className="hero_right">
        <Earth />
      </div>
    </div>
  );
}
