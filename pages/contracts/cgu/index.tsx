import { Metadata } from "next";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import Head from "next/head";

export default function CguPage() {
  const { t } = useTranslation("cgu");

  return (
    <>
      <Head>
        <title>{t("Conditions générale d'utilisation")} - YVEA</title>
        <meta name="description" content="Yvea - CGU" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follows" />
      </Head>
      <div className={styles.cgu}>
        <h2 className={styles.cgu_title}>
          {t("Conditions générale d'utilisation")}
        </h2>
        <div className={styles.cgu_article}>
          <h3 className={styles.article_title}>{t("Préambule")}</h3>
          <p className={styles.article_paragraph}>
            {t(
              "Les présentes conditions générales d'utilisation (les 'CGU' ou 'Conditions Générales d'Utilisation') régissent l'utilisation du site https://yvea.io (ci-après le « Site ») par tout professionnel titulaire d'un compte client ci-après défini suite à l'inscription aux services proposés (ci-après « l'Utilisateur ») par la société YVEA (ci-après « la Société »)"
            )}
            <br />
            <br />
            {t(
              "En naviguant sur le Site, l'Utilisateur reconnait avoir pris connaissance et accepter pleinement et sans réserve les CGU."
            )}
            <br />
            <br />
            {t(
              "La Société se réserve le droit de modifier à tout moment les CGU. Elles seront alors applicables dès leur mise en ligne. A ce titre, l'Utilisateur est invité à prendre connaissance des présentes CGU régulièrement."
            )}
          </p>
        </div>
        <div className={styles.cgu_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 1. Accès au site")}
          </h3>
          <p className={styles.article_paragraph}>
            {t("L'accès au site est réservé aux personnes majeures.")}
            <br />
            <br />
            {t(
              "L'éditeur se réserve le droit de demander toute justification de votre"
            )}
            âge.
            <br />
            <br />
            {t(
              "L'accès au site et son utilisation sont réservés à un usage strictement personnel des utilisateurs."
            )}
            <br />
            <br />
            {t(
              "Vous vous engagez à ne pas utiliser ce site, les informations et les données qui y figurent à des fins commerciales, politiques, publicitaires et pour toute forme de sollicitation commerciale et notamment l'envoi de courriers électroniques non sollicités."
            )}
          </p>
        </div>
        <div className={styles.cgu_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 2. Compte client")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Le compte client doit être créé sur le Site par le représentant légal de la personne morale qui souhaite recourir aux services de la Société (le « Compte »)."
            )}
            <br />
            <br />
            {t(
              "Lors de son inscription, le représentant légal renseigne une adresse électronique et un mot de passe choisis par lui (les « Identifiants ») dont la saisie permettra la connexion au Compte."
            )}
            <br />
            <br />
            {t(
              "Le représentant légal est en charge de la gestion de ce Compte. Il gère notamment les demandes de certificat de conformité."
            )}
            <br />
            <br />
            {t(
              "Seuls les Utilisateurs titulaires d'un Compte peuvent accéder à l'ensemble des fonctionnalités et services du Site."
            )}
          </p>
        </div>
        <div className={`${styles.cgu_article} ${styles.sub}`}>
          <h3 className={styles.article_title}>
            {t("2.1. Conditions d'inscription")}
          </h3>
          <p className={styles.article_paragraph}>
            {t("L'inscription sur le Site en tant que Client est gratuite.")}
            <br />
            <br />
            {t(
              "L'Utilisateur est invité à fournir des informations permettant de l'identifier en complétant la fiche client. En remplissant ce formulaire, l'Utilisateur déclare avoir pris connaissance :"
            )}
            <br />
          </p>
          <ul className={styles.cgu_list}>
            <li>{t("des présentes Conditions Générales d'Utilisation,")}</li>
            <li>{t("des conditions générales de vente,")}</li>
            <li>
              {t("et de la charte de protection des données personnelles,")}
            </li>
            <li>{t("et les accepte sans réserve.")}</li>
          </ul>
          <p>
            {t(
              "L'Utilisateur s'engage à fournir de manière loyale à la Société des données exactes et complètes (nom, prénom, adresse électronique, numéro de téléphone, etc.) qui ne portent pas atteinte, à quelque titre que ce soit, aux droits de tiers, quels qu'ils soient."
            )}
            <br />
            <br />
            {t(
              "L'Utilisateur s'engage à mettre les informations précitées à jour et à corriger les éventuelles erreurs les affectant. La Société se réserve le droit de demander à l'Utilisateur de confirmer, par tout moyen approprié, son identité, son éligibilité et les informations communiquées."
            )}
          </p>
        </div>
        <div className={`${styles.cgu_article} ${styles.sub}`}>
          <h3 className={styles.article_title}>
            {t("2.2. Spécifications techniques")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "L'Utilisateur reconnait disposer des moyens et compétences nécessaires à l'utilisation du Site. Les équipements nécessaires à l'accès et à l'utilisation du Site sont à la charge de l'Utilisateur, de même que les frais de télécommunications induits par leur utilisation."
            )}
          </p>
        </div>
        <div className={`${styles.cgu_article} ${styles.sub}`}>
          <h3 className={styles.article_title}>
            {t("2.3. Gestion des identifiants")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "L'Utilisateur s'engage à ne créer qu'un seul Compte correspondant à la personne morale dont il est le représentant légal."
            )}
            <br />
            <br />
            {t(
              "Les Identifiants sont personnels. Le choix des Identifiants doit s'opérer dans le respect de la législation en vigueur, notamment celle relative à l'usurpation d'identité (Article 434-23 du Code pénal) ou à la contrefaçon de marque ou de droits d'auteur (Articles L.335-2 et suivants ou L.713-1 et suivants du Code de la Propriété intellectuelle)."
            )}
            <br />
            <br />
            {t(
              "Il appartient à l'Utilisateur d'assurer la confidentialité de ses Identifiants. Toute connexion au Compte d'un Utilisateur à partir des Identifiants sera présumée avoir été faite par l'Utilisateur lui-même. L'Utilisateur est seul responsable de l'utilisation de ses Identifiants par des tiers ou des actions ou déclarations faites par l'intermédiaire de son Compte, qu'elles soient frauduleuses ou non. C'est pourquoi l'Utilisateur garantit la Société contre toute demande faite à ce titre."
            )}
            <br />
            <br />
            {t(
              "En effet, il est rappelé que la Société n'a pas pour obligation de vérifier l'identité de chaque Utilisateur. Par conséquent, en cas d'usurpation d'identité d'un Utilisateur, la Société ne saurait être tenue pour responsable."
            )}
            <br />
            <br />
            {t(
              "En tout état de cause, si un Utilisateur suspecte une utilisation frauduleuse de son Compte, il devra immédiatement en avertir la Société. Cette dernière s'engage à préserver la confidentialité et la sécurité des Identifiants du Client. Conformément à l'article 4, la Société se réserve le droit de suspendre ou supprimer le Compte du Client en cas d'enregistrement incomplet."
            )}
          </p>
        </div>
        <div className={styles.cgu_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 3. Contenu du site")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner ce Site et plus généralement tous les éléments reproduits ou utilisés sur le Site sont protégés par les lois en vigueur au titre de la propriété intellectuelle."
            )}
            <br />
            <br />
            {t(
              "Ils sont la propriété pleine et entière de l'éditeur ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de l'éditeur, sont strictement interdites. Le fait pour l'éditeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites."
            )}
            <br />
            <br />
            {t(
              "Les photographies de produits, accompagnant leur description, ne sont pas contractuelles et n'engagent pas l'éditeur."
            )}
          </p>
        </div>
        <div className={styles.cgu_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 4. Gestion du site")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "La Société a adopté des mesures raisonnables pour assurer une sécurisation de l'accès au Site. Ces mesures de sécurité sont notamment les suivantes (liste non limitative) :"
            )}
            <br />
          </p>
          <ul className={styles.cgu_list}>
            <li>
              {t(
                "Authentification des Utilisateurs par un identifiant et un mot de passe ; le mot de passe est choisi par le Client et ne peut être connu que par lui et ses Utilisateurs. Il n'est jamais transmis à l'Utilisateur par quelque moyen que ce soit. Il n'est pas accessible aux collaborateurs du Fournisseur."
              )}
            </li>
            <li>
              {t(
                "Sécurisation de l'accès aux données ; seuls les Utilisateurs rattachés à un Compte Client peuvent visualiser et accéder aux données et documents de ce Compte Client."
              )}
            </li>
            <li>
              {t(
                "Sécurisation des échanges réseau ; l'éditeur a mis en place le protocole de transfert chiffré HTTPS pour sécuriser les informations circulant sur le réseau internet dans le cadre des Services fournis."
              )}
            </li>
            <li>
              {t(
                "Sécurité de la plate-forme serveur ; l'éditeur a adopté des moyens adaptés de collecte, de stockage et de traitement de données, ainsi que des mesures de sécurité logicielle et physique spécifiques pour se protéger contre l'accès, la modification, la divulgation ou la destruction non autorisées des données et documents des Comptes Clients. Le centre d'hébergement serveur est physiquement implanté en France et applique également de strictes procédures de sauvegarde et de sécurité."
              )}
            </li>
          </ul>
          <p>
            <br />
            <br />
            {t(
              "Pour la bonne gestion du Site, l'éditeur pourra à tout moment :"
            )}
            <br />
          </p>
          <ul className={styles.cgu_list}>
            <li>
              {t(
                "Suspendre, interrompre ou limiter l'accès à tout ou partie du Site, réserver l'accès au Site, ou à certaines parties du Site, à une catégorie déterminée d'internaute ;"
              )}
            </li>
            <li>
              {t(
                "Supprimer toute information pouvant en perturber le fonctionnementou entrant en contravention avec les lois nationales ou internationales, ou avec les règles de la Nétiquette ;"
              )}
            </li>
            <li>
              {t("Suspendre le Site afin de procéder à des mises à jour.")}
            </li>
          </ul>
        </div>
        <div className={styles.cgu_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 5. Données à caractère personnel")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "L'Utilisateur est invité à se reporter à la charte de protection des données personnelles accessibles sur le Site."
            )}
          </p>
        </div>
        <div className={styles.cgu_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 6. Responsabilité")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "En aucun cas la Société ne pourra être tenue pour responsable si le Client utilise le logiciel pour présenter et organiser sa gestion et sa comptabilité d'une façon qui n'est pas conforme à la législation en vigueur."
            )}
            <br />
            <br />
            {t(
              "La Société ne sera pas responsable de toute perte ou déformation du contenu des documents téléchargés par l'Utilisateur sur le serveur."
            )}
            <br />
            <br />
            {t(
              "L'Utilisateur garantit que les identifiants, mots de passe et équivalents obtenus par un Utilisateur lors de son inscription sont enregistrés et utilisés de manière sécurisée, sans que les tiers ne puissent y accéder ni les utiliser. L'Utilisateur sera responsable de toute utilisation non autorisée des Services. La Société ne sera aucunement responsable pour toute perte ou tout dommage découlant du manquement de l'Utilisateur à respecter ces exigences."
            )}
            <br />
            <br />
            {t(
              "Lorsqu'il est suspecté qu'une personne non autorisée ait pu avoir connaissance de l'identifiant et du mot de passe d'un Utilisateur, ce dernier devra immédiatement en aviser la Société."
            )}
            <br />
            <br />
            {t(
              "En cas de défauts majeurs qui empêchent sérieusement l'utilisation du Site par le Client et qui sont imputables à une négligence grave de l'éditeur, ce dernier s'engage à agir pour corriger ce défaut sans retard excessif. En l'absence d'intention ou de négligence grave de la part de l'éditeur, ce dernier n'assumera par ailleurs aucune responsabilité se rapportant aux défauts ou défaillances empêchant l'accès au Site ou à l'une de ses fonctionnalités. Les notifications d'erreurs devront être remises par le Client conformément aux instructions annoncées par l'éditeur sur le Site Web et dans un délai raisonnable suivant la découverte du défaut."
            )}
            <br />
            <br />
            {t(
              "Le matériel de connexion au Site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données notamment d'attaques virales par Internet. Vous êtes par ailleurs le seul responsable des sites et données que vous consultez."
            )}
            <br />
            <br />
            {t(
              "L'éditeur ne pourra être tenu responsable en cas de poursuites judiciaires à l'encontre de l'Utilisateur :"
            )}
            <br />
          </p>
          <ul className={styles.cgu_list}>
            <li>
              {t(
                "du fait de l'usage du Site ou de tout service accessible via Internet ;"
              )}
            </li>
            <li>{t("du fait du non-respect des présentes CGU.")}</li>
          </ul>
          <p>
            <br />
            <br />
            {t(
              "Si l'éditeur venait à faire l'objet d'une procédure amiable ou judiciaire à raison de l'utilisation du Site par l'Utilisateur, il pourra se retourner contre lui pour obtenir indemnisation de tous les préjudices, sommes, condamnations et frais qui pourraient découler de cette procédure."
            )}
          </p>
        </div>
        <div className={styles.cgu_article}>
          <h3 className={styles.article_title}>{t("ARTICLE 7. Cookies")}</h3>
          <p className={styles.article_paragraph}>
            {t(
              "Le Site peut collecter automatiquement des informations standards. Toutes les informations collectées indirectement ne seront utilisées que pour suivre le volume, le type et la configuration du trafic utilisant ce site, pour en développer la conception et l'agencement et à d'autres fins administratives et de planification et plus généralement pour améliorer le service que nous vous offrons."
            )}
            <br />
            <br />
            {t(
              "Ces cookies resteront stockés dans l'ordinateur de l'internaute pendant cinq ans (5 ans), à moins que l'internaute ne les supprime."
            )}
            <br />
            <br />
            {t(
              "Tout internaute a la possibilité de refuser ces cookies en cliquant sur le bouton « supprimer les cookies » dans les options Internet/onglets : confidentialité, sachant que l'utilisation du site pourra s'en trouver limitée. Un cookie ne nous permet pas de vous identifier. De manière générale, il enregistre des informations relatives à la navigation de votre ordinateur sur notre site (les pages que vous avez consultées, la date et l'heure de la consultation, etc.) que nous pourrons lire lors de vos visites ultérieures."
            )}
          </p>
        </div>
        <div className={styles.cgu_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 8. Loi applicable")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Les présentes conditions d'utilisation du site sont régies par la loi française et soumises à la compétence des tribunaux français."
            )}
          </p>
        </div>
        <div className={styles.cgu_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 9. Nous contacter")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Pour toute question, information sur le Site, l'Utilisateur est invité à contacter la Société à l'adresse suivante contact@yvea.io ou au numéro de téléphone suivant : 01.59.06.79.52"
            )}
            <br />
            <br />
            {t(
              "Contact juridique : Me Dahlia ARFI-ELKAÏM, avocat au Barreau de Paris."
            )}
            <br />
            <br />
            AARPI JDB AVOCATS- 30 rue Marbeuf 75008 PARIS
            <br />
            <br />
            Tel :01.42.56.96.96 www.jdbavocats.com
          </p>
        </div>
      </div>
    </>
  );
}
