import styles from "./style.module.css";

import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function LegalMentionsPage() {
  const { t } = useTranslation("legal-mentions");
  return (
    <>
      <Head>
        <title>{t("Mentions Légales")} - YVEA</title>
        <meta name="description" content="Yvea - Legal mentions" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follows" />
      </Head>

      <div className={styles.legals}>
        <h2 className={styles.legals_title}>{t("Mentions Légales")}</h2>
        <div className={styles.legals_article}>
          <h3 className={styles.article_title}>
            {t("1. Identification de l'éditeur")}
          </h3>
          <p>
            {t("Le site YVEA (ci-après ")}
            <span className={styles.bold}>{t("« le Site »")}</span>
            {t(
              ", accessible à l'adresse https://www.yvea.io est édité par la société YVEA (ci-après"
            )}
            <span className={styles.bold}>{t("« l'Éditeur »")}</span>
            {t(
              ", SASU au capital de 1000.0 euros, dont le siège social est situé 27 Rue du Chemin Vert, 75011 Paris, France. Il est immatriculé au RCS de Paris sous le numéro 914285259. TVA intracommunautaire n° FR78914285259"
            )}
            <br />
            <br />
            {t(
              "L'Éditeur peut être contacté à l'adresse mail contact@yvea.io ou au numéro 01 59 06 79 52."
            )}
          </p>
        </div>
        <div className={styles.legals_article}>
          <h3 className={styles.article_title}>
            {t("2. Hébergeur du site internet")}
          </h3>
          <p>
            {t(
              "Le site YVEA est hébergé par HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca, Chypre."
            )}
            <br />
            <br />
            {t(
              "L'hébergeur est joignable par mail à l'adresse suivante : gdpr@hostinger.com."
            )}
            <br />
            <br />
            {t(
              "Il est également joignable au numéro suivant : 0 892 97 70 93."
            )}
          </p>
        </div>
        <div className={styles.legals_article}>
          <h3 className={styles.article_title}>
            {t("3. Collecte de données personnelles")}
          </h3>
          <p>
            {t(
              "Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978 modifiée, relative à l'informatique, aux fichiers et aux libertés, l'utilisateur est informé que l'Éditeur procède à la collecte et au traitement de données personnelles, lors de la connexion au Site."
            )}
            <br />
            <br />
            {t(
              "Les données collectées servent principalement à permettre la mise à disposition de la Plateforme, son optimisation et sa sécurisation afin d'offrir aux utilisateurs un service de la meilleure qualité possible. Des données supplémentaires pourront éventuellement être collectées par l'Éditeur pour permettre la bonne exécution de contrats commerciaux conclus par l'entremise de la Plateforme avec l'utilisateur."
            )}
            <br />
            <br />
            {t(
              "L'utilisateur est informé qu'il dispose d'un droit d'accès, d'interrogation, de modification et de suppression des informations qui le concernent, à exercer à tout moment auprès de l'Éditeur soit directement sur le Site, soit par courrier postal adressé au 27 Rue du Chemin Vert, 75011 Paris, France soit par e-mail à l'adresse contact@yvea.io."
            )}
            <br />
            <br />
            {t(
              "Les informations recueillies pourront éventuellement être partagées à des tiers résidant dans l'Union Européenne dans les cas suivants :"
            )}
            <br />
          </p>

          <ul className={styles.legals_list}>
            <li>
              {t(
                "Lorsque l'utilisateur publie, dans une zone de commentaire, des informations accessibles au public ;"
              )}
            </li>
            <li>{t("Lorsque l'utilisateur y consent expressément ;")}</li>
            <li>
              {t(
                "Lorsque la loi l'exige ou afin de coopérer à une enquête judiciaire à la demande exprès d'un détenteur de l'autorité publique ;"
              )}
            </li>
            <li>
              {t(
                "Pour l'exécution de prestations commerciales pour lesquelles est rendue nécessaire la coopération d'un tiers, notamment dans le cas où l'Éditeur choisirait de sous-traiter certaines de ses prestations par l'entremise de Services Tiers."
              )}
            </li>
          </ul>
          <br />
          <br />
          <p>
            {t(
              "Lorsque certaines informations sont obligatoires pour accéder à des fonctionnalités spécifiques du Site, l'Éditeur indiquera ce caractère obligatoire au moment de la saisie des données."
            )}
            <br />
            <br />
            {t(
              "Les données personnelles collectées ne seront conservées que le temps nécessaire pour permettre la bonne utilisation du Site, empêcher les fraudes et abus, et satisfaire aux obligations légales et réglementaires de l'Éditeur concernant la gestion du Site."
            )}
          </p>
        </div>
        <div className={styles.legals_article}>
          <h3 className={styles.article_title}>{t("4. Cookies")}</h3>
          <p>
            {t(
              "Le Site peut avoir recours à la technique des « cookies » telle que définie par la CNIL de la manière suivante :"
            )}
            <br />
            <br />
            {t(
              "« Un cookie est un petit fichier stocké par un serveur dans le terminal (ordinateur, téléphone, etc.) d'un utilisateur et associé à un domaine web (c'est-à-dire dans la majorité des cas à l'ensemble des pages d'un même site web). Ce fichier est automatiquement renvoyé lors de contacts ultérieurs avec le même domaine. Les cookies ont de multiples usages : ils peuvent servir à mémoriser votre identifiant client auprès d'un site marchand, le contenu courant de votre panier d'achat, la langue d'affichage de la page web, un identifiant permettant de tracer votre navigation à des fins statistiques ou publicitaires, etc. » .Information issue du site officiel de la CNIL (https://www.cnil.fr/fr/glossaire)"
            )}
            <br />
            <br />
            {t(
              "Ces cookies ont pour objectif de faciliter la navigation de l'utilisateur et d'améliorer la qualité du service proposé, en collectant des informations statistiques et relatives au trafic."
            )}
            <br />
            <br />
            {t(
              " L'utilisation de ces cookies est portée à la connaissance de l'utilisateur par le biais d'un bandeau lui demandant son consentement. Si l'utilisateur y consent, ce consentement est considéré comme valide pour une durée maximale de treize (13) mois."
            )}
            <br />
            <br />
            {t(
              "Si l'utilisateur ne consent pas à l'utilisation des cookies, l'Éditeur ne pourra lui garantir une expérience optimale sur le Site."
            )}
            <br />
            <br />
            {t(
              "Les cookies suivants sont utilisés sur le Site : Google Analytics."
            )}
          </p>
        </div>
        <div className={styles.legals_article}>
          <h3 className={styles.article_title}>
            {t("5. Respect de la propriété intellectuelle")}
          </h3>
          <p>
            {t(
              "Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner le Site, et plus généralement tous les éléments reproduits ou utilisés sur le Site, sont protégés par les lois en vigueur au titre de la propriété intellectuelle."
            )}
            <br />
            <br />
            {t(
              "Ils sont la propriété pleine et entière de l'Éditeur ou de ses partenaires, sauf mentions particulières. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de l'Éditeur, sont strictement interdites. Le fait pour l'Éditeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites."
            )}
            <br />
            <br />
            {t(
              "Seule l'utilisation pour un usage privé dans un cercle de famille est autorisée et toute autre utilisation est constitutive de contrefaçon et/ou d'atteinte aux droits voisins, sanctionnées par Code de la propriété intellectuelle."
            )}
            <br />
            <br />
            {t(
              "La reprise de tout ou partie de ce contenu nécessite l'autorisation préalable de l'Éditeur ou du titulaire des droits sur ce contenu."
            )}
          </p>
        </div>
        <div className={styles.legals_article}>
          <h3 className={styles.article_title}>{t("6. Liens hypertextes")}</h3>
          <p>
            {t(
              "Le Site peut contenir des liens hypertextes donnant accès à d'autres sites web édités et gérés par des tiers et non par l'Éditeur. L'Éditeur ne pourra être tenu responsable directement ou indirectement dans le cas où lesdits sites tiers ne respecteraient pas les dispositions légales."
            )}
            <br />
            <br />
            {t(
              "La création de liens hypertextes vers le Site ne peut être faite qu'avec l'autorisation écrite et préalable de l'Éditeur."
            )}
          </p>
        </div>
      </div>
    </>
  );
}
