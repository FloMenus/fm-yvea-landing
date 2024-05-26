import styles from "./style.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function PvocHeader() {
  const { t } = useTranslation("pvoc");
  return (
    <div className={styles.pvoc_header}>
      <div className={styles.pvoc_header_text}>
        <h1 className={styles.pvoc_header_text_title}>{t("Programme PVoC")}</h1>
        <p className={styles.pvoc_header_text_paragraph}>
          {t(
            "Le programme de pré-vérification de la conformité ou PVoC permet aux pays de destination d’assurer que les marchandises importées répondent bien aux normes locales."
          )}
          <br />
          <br />
          {t(
            "L’exportateur (vendeur) doit valider ses documents et faire inspecter sa marchandise auprès d’un organisme de certification mandaté par le pays de destination afin d’obtenir un certificat de conformité (CoC). Sans ce certificat, la marchandise ne peut pas être récupérée par l’acheteur et risque d’être détruite!"
          )}
        </p>
      </div>
      <Image
        width={256}
        height={256}
        className={styles.pvoc_header_img}
        src="/medias/documents.png"
        alt="pvoc_header"
      />
    </div>
  );
}
