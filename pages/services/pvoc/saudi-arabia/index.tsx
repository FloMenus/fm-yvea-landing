import styles from "./style.module.css";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function SaudiArabia() {
  const { t } = useTranslation("pvoc_saudi_arabia");
  return (
    <>
      <Head>
        <title>{t("Arabie Saoudite")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follows" />
      </Head>
      <div className={styles.main_container}>
        <div className={styles.title_container}>
          <h1 className={styles.main_title}>{t("Arabie Saoudite")}</h1>
          <Image
            src="/fm-yvea-landing/medias/country_flags/ArabieSaoudite.png"
            width={36}
            height={36}
            alt="Saudi Arabia"
            className={styles.flag}
          />
        </div>
        <h2 className={styles.second_title}>{t("Présentation")}</h2>
        <p className={styles.paragraph}>
          {t(
            "Toutes les exportations à destination de l’Arabie saoudite nécessitent une évaluation de conformité des produits, conformément aux réglementations en vigueur."
          )}
        </p>
        <br />
        <p className={styles.paragraph}>
          {t(
            "Pour cela, plusieurs dispositifs ont été mis en place, tels que la plateforme SABER ou SFDA, qui permettent de valider cette étape en fonction de la typologie des produits importés. La plateforme SABER offre un processus transparent et simplifié pour l’enregistrement et la certification des produits pour le programme SALEEM, tandis que le SFDA se concentre spécifiquement sur les produits : alimentaires, chimiques, cosmétiques, équipements médicaux et produits pharmaceutiques."
          )}
        </p>
        <br />
        <p className={styles.paragraph}>
          {t(
            "Il est important de noter que l’évaluation de conformité peut également impliquer des tests en laboratoire, des inspections de qualité et d’autres mesures visant à assurer la sécurité et la conformité des produits importés en Arabie saoudite. Ces procédures garantissent un commerce international équitable et protègent les intérêts des consommateurs saoudiens."
          )}
        </p>
        <h2 className={styles.second_title}>{t("Découvrez les programmes")}</h2>
        <div className={styles.links_container}>
          <Link href="/services/pvoc/saudi-arabia/saleem-saber">
            <div className={styles.link}>
              <h3 className={styles.link_title}>SALEEM/SABER</h3>
            </div>
          </Link>
          <div className={styles.link}>
            <h3 className={styles.link_title}>
              SFDA (Saudi Food & Drug Authority)
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
