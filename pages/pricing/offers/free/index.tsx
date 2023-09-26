import styles from "./style.module.css";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function FreeOffer() {
  const { t } = useTranslation("pricing");
  return (
    <>
      <Head>
        <title>{t("Offre Free")} - YVEA</title>
        <meta name="description" content="Yvea - Pricing" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follows" />
      </Head>
      <div className={styles.main_container}>
        <div className={styles.header_section}>
          <h1 className={styles.title}>
            <span className={styles.title_bold}>{t("YVEA Free")}</span>
            {t(" : Découvrez l'efficacité, même en mode freemium.")}
          </h1>
          <p className={styles.subtitle}>
            {t("Avec YVEA, simplicité ne rime pas avec limitation.")}
          </p>
          <Image
            className={styles.header_cover}
            src="/medias/free.png"
            width={300}
            height={300}
            alt="free"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.second_title}>
              {t("Toujours à vos côtés, même sans dépenser un centime.")}
            </h2>
            <ul className={styles.list_number}>
              <li className={styles.square}>
                <p className={styles.list_description}>
                  {t(
                    "1 | Vérification Instantanée: Assurez-vous à tout moment si vos produits nécessitent un contrôle PVOC"
                  )}
                </p>
              </li>
              <li className={styles.square}>
                <p className={styles.list_description}>
                  {t(
                    "2 | Estimation Précise : Anticipez vos dépenses en simulant le coût du contrôle PVoC au centime près."
                  )}
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.second_title}>
              {t("Faites-nous confiance, sans engagement.")}
            </h2>
            <p className={styles.paragraph}>
              {t(
                "Nous savons combien il est essentiel de construire une relation de confiance. C'est pourquoi nous vous proposons de découvrir nos services sans frais pour votre premier dossier :"
              )}
            </p>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                <span className={styles.item_bold}>{t("• Rapidité")}</span>
                <p className={styles.list_description}>
                  {t(" : Constituez un dossier complet en un éclair.")}
                </p>
              </li>
              <li className={styles.list_item}>
                <p className={styles.list_description}>
                  <span className={styles.item_bold}>
                    {t("• Accompagnement")}
                  </span>
                  {t(
                    " : Bénéficiez d'un expert dédié pour suivre votre dossier de A à Z."
                  )}
                </p>
              </li>
              <li className={styles.list_item}>
                <p className={styles.list_description}>
                  <span className={styles.item_bold}>{t("• Priorité")}</span>
                  {t(
                    " : Avec YVEA, votre dossier est toujours traité en priorité."
                  )}
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.second_title}>
              {t("Qualité, sans se ruiner.")}
            </h2>
            <p className={styles.paragraph}>
              {t(
                "Nous mettons un point d'honneur à offrir le meilleur, quel que soit votre budget. Pour seulement "
              )}
              <span className={styles.price_bold}>{t("39,95€ HT")}</span>
              {t(" par dossier, bénéficiez d'une expertise inégalée.")}
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.second_title}>{t("Option Express Gabon")}</h2>
            <p className={styles.paragraph}>
              {t(
                "Besoin d'accélérer les choses pour le Gabon ? Avec cette option, obtenez votre certificat en moins de 72h. Après vérification par votre interlocuteur dédié, profitez de cette vitesse accrue pour seulement +19,95€ par dossier."
              )}
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.second_title}>{t("Envie de plus ?")}</h2>
            <p className={styles.paragraph}>
              {t("Passez à la vitesse supérieure avec notre ")}
              <Link
                className={`${styles.link} ${styles.offer}`}
                href="/pricing/offers/pro"
              >
                {t("offre Pro")}
              </Link>
              {t(
                ". Plus de fonctionnalités, plus de flexibilité, pour une expérience YVEA optimisée."
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
