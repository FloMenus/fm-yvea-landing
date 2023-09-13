import "./style.css";
import Image from "next/image";

export default function PvocHeader() {
  return (
    <div className="pvoc_header">
      <div className="pvoc_header_text">
        <h1 className="pvoc_header_text_title">Programme PVoC</h1>
        <p className="pvoc_header_text_paragraph">
          Le programme de pré-vérification de la conformité ou PVoC permet aux
          pays de destination d’assurer que les marchandises importées répondent
          bien aux normes locales.
          <br />
          <br />
          L’exportateur (vendeur) doit valider ses documents et faire inspecter
          sa marchandise auprès d’un organisme de certification mandaté par le
          pays de destination afin d’obtenir un certificat de conformité (CoC).
          Sans ce certificat, la marchandise ne peut pas être récupérée par
          l’acheteur et risque d’être détruite!
        </p>
      </div>
      <Image
        width={256}
        height={256}
        className="pvoc_header_img"
        src="/medias/documents.png"
        alt="pvoc_header"
      />
    </div>
  );
}
