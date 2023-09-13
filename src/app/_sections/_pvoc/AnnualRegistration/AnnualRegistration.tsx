import "./style.css";
import Link from "next/link";
import Image from "next/image";

export default function AnnualRegistration() {
  return (
    <div className="annual_registration">
      <div className="annual_registration_text">
        <h4 className="annual_registration_title">
          L'option cachée pour un certificat plus rapide: l'
          <span>enregistrement annuel</span>
        </h4>
        <p className="annual_registration_description">
          Ayant accompagné plus de 650 sociétés dans leurs besoins de mise en
          conformité, Moamen ELMASRY, fondateur d’YVEA, met à votre disposition
          ce livre blanc qui compile toutes les informations essentielles sur
          les différentes procédures, vous permettant ainsi de maîtriser et de
          comprendre pleinement ce programme.
          <br />
          <br />
          Grâce à ce livre blanc, vous deviendrez incontournable dans le domaine
          du programme PVoC et vous pourrez rassurer vos clients quant à vos
          connaissances approfondies sur le sujet.
        </p>
      </div>
      <div className="annual_registration_right">
        <Image
          width={90}
          height={30}
          className="annual_registration_arrow arrow1"
          src="/medias/shapes/arrow1.svg"
          alt="arrow"
        />
        <Link
          href="https://app-eu1.hubspot.com/documents/25904801/view/532596303?accessId=1610a1"
          target="_blank"
        >
          <Image
            width={300}
            height={375}
            src="/medias/book.png"
            className="annual_registration_illustration"
            alt="book"
          />
        </Link>
        <Image
          width={50}
          height={90}
          className="annual_registration_arrow arrow2"
          src="/medias/shapes/arrow2.svg"
          alt="arrow"
        />
      </div>
    </div>
  );
}
