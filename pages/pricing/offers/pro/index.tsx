import styles from "./style.module.css";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ProOffer() {
  const { t } = useTranslation("pricing");
  return (
    <>
      <Head>
        <title>{t("Offre Pro")} - YVEA</title>
        <meta name="description" content="Yvea - Pricing" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follows" />
      </Head>
      <div className={styles.main_container}>
        <div className={styles.header_section}>
          <h1 className={styles.title}>
            <span className={styles.title_bold}>{t("YVEA Pro")}</span>
            {t(" : L'excellence à portée de main.")}
          </h1>
          <p className={styles.subtitle}>
            {t(
              "Pensée pour les entreprises exigeantes, l'offre Pro apporte une dimension supérieure à votre expérience d'exportation."
            )}
          </p>
          <Image
            className={styles.header_cover}
            src="/fm-yvea-landing/medias/premium.png"
            width={300}
            height={300}
            alt="premium"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.second_title}>
              {t("Maximisez chaque instant.")}
            </h2>
            <p className={styles.paragraph}>
              {t(
                "L'offre Pro est conçue pour les professionnels souhaitant optimiser chaque étape de leur processus d'exportation :"
              )}
            </p>
            <ul className={styles.list_number}>
              <li className={styles.square}>
                <p className={styles.list_description}>
                  <span className={styles.item_bold}>
                    {t("Option Brouillon")}
                  </span>
                  <br />
                  <br />
                  {t(
                    "Commencez, mettez en pause, puis reprenez la constitution de votre dossier quand vous le souhaitez."
                  )}
                </p>
              </li>
              <li className={styles.square}>
                <p className={styles.list_description}>
                  <span className={styles.item_bold}>
                    {t("Réutilisation des données")}
                  </span>
                  <br />
                  <br />
                  {t("Fini les saisies répétitives. YVEA mémorise pour vous.")}
                </p>
              </li>
              <li className={styles.square}>
                <p className={styles.list_description}>
                  <span className={styles.item_bold}>
                    {t("Gestion documentaire automatisée")}
                  </span>
                  <br />
                  <br />
                  {t(
                    "Transformez votre gestion documentaire en expérience digitale."
                  )}
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.second_title}>
              {t("Tarifs avantageux pour les professionnels.")}
            </h2>
            <p className={styles.paragraph}>
              {t(
                "Avec l'offre Pro, les frais d'accompagnement par dossier PVoC sont réduits à 35,00€. Un investissement minimal pour une qualité de service maximale."
              )}
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.second_title}>
              {t("Réduisez les délais sans compromettre la qualité.")}
            </h2>
            <p className={styles.paragraph}>
              {t("Chaque seconde compte. Avec Pro :")}
            </p>
            <ul className={styles.list_number}>
              <li className={`${styles.square} ${styles.square_bis}`}>
                <p className={styles.list_description}>
                  <span className={styles.item_bold}>
                    {t("Option Express Gabon Incluse")}
                  </span>
                  <br />
                  <br />
                  {t("Votre certificat en moins de 72h.")}
                </p>
              </li>
              <li className={`${styles.square} ${styles.square_bis}`}>
                <p className={styles.list_description}>
                  <span className={styles.item_bold}>
                    {t("Frais d'accompagnement pour l'Arabie Saoudite inclus")}
                  </span>
                  <br />
                  <br />
                  {t("Nous gérons, vous progressez.")}
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.second_title}>
              {t("Profitez d'une tarification avantageuse.")}
            </h2>
            <p className={styles.paragraph}>
              {t("Accédez à l'offre Pro pour seulement ")}
              <span className={styles.price_bold}>{t("12,95€")}</span>
              {t(
                "/utilisateur par mois (facturé annuellement). Maximisez vos bénéfices tout en maîtrisant vos coûts."
              )}
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.second_title}>
              {t("Des bénéfices exclusifs.")}
            </h2>
            <p className={styles.paragraph}>
              {t(
                "Bénéficiez de remises spéciales sur les services de nos partenaires, et explorez de nouvelles façons de grandir."
              )}
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.second_title}>
              {t("Intéressé(e) par YVEA Pro ?")}
            </h2>
            <p className={styles.paragraph}>
              {t("L'accès à l'offre Pro nécessite une validation préalable. ")}
              <Link
                className={styles.link_form}
                href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSemoVIH-3smSe3CnBAoQvMzHLSzsl8Sh69O7Ajv1ofWq6fqyA/viewform"
              >
                {t("Remplissez notre formulaire")}
              </Link>
              {t(" et nous reviendrons vers vous rapidement.")}
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.second_title}>
              {t("Vous souhaitez commencer en douceur ?")}
            </h2>
            <p className={styles.paragraph}>
              {t("Découvrez ")}
              <Link
                className={`${styles.link} ${styles.offer}`}
                href="/pricing/offers/free"
              >
                {t("l'offre Free")}
              </Link>
              {t(" pour une première immersion dans l'univers YVEA.")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
