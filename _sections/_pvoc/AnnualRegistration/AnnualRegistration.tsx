import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AnnualRegistration() {
  const { t } = useTranslation("pvoc");
  return (
    <div className={styles.annual_registration}>
      <div className={styles.annual_registration_text}>
        <h4 className={styles.annual_registration_title}>
          {t("L'option cachée pour un certificat plus rapide: l'")}
          <span>{t("enregistrement annuel")}</span>
        </h4>
        <p className={styles.annual_registration_description}>
          {t(
            "Ayant accompagné plus de 650 sociétés dans leurs besoins de mise en conformité, Moamen ELMASRY, fondateur d’YVEA, met à votre disposition ce livre blanc qui compile toutes les informations essentielles sur les différentes procédures, vous permettant ainsi de maîtriser et de comprendre pleinement ce programme."
          )}
          <br />
          <br />
          {t(
            "Grâce à ce livre blanc, vous deviendrez incontournable dans le domaine du programme PVoC et vous pourrez rassurer vos clients quant à vos connaissances approfondies sur le sujet."
          )}
        </p>
      </div>
      <div className={styles.annual_registration_right}>
        <Image
          width={90}
          height={30}
          className={`${styles.annual_registration_arrow} ${styles.arrow1}`}
          src="/fm-yvea-landing/medias/shapes/arrow1.svg"
          alt="arrow"
        />
        <Link
          href="https://app-eu1.hubspot.com/documents/25904801/view/532596303?accessId=1610a1"
          target="_blank"
        >
          <Image
            width={300}
            height={375}
            src="/fm-yvea-landing/medias/book.png"
            className={styles.annual_registration_illustration}
            alt="book"
          />
        </Link>
        <Image
          width={50}
          height={90}
          className={`${styles.annual_registration_arrow} ${styles.arrow2}`}
          src="/fm-yvea-landing/medias/shapes/arrow2.svg"
          alt="arrow"
        />
      </div>
    </div>
  );
}
