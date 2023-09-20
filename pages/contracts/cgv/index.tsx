import styles from "./style.module.css";
import Head from "next/head";

import { useTranslation } from "react-i18next";

export default function CgvPage() {
  const { t } = useTranslation("cgv");
  return (
    <>
      <Head>
        <title>{t("CGV")} - YVEA</title>
        <meta name="description" content="Yvea - CGV" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follows" />
      </Head>

      <div className={styles.cgv}>
        <h2 className={styles.cgv_title}>
          {t("Conditions générales de vente - SaaS")}
        </h2>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 1. Champ d'application")}
          </h3>
          <p>
            {t(
              "Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent, sans restriction ni réserve toute relation contractuelle entre la société YVEA, société par actions simplifiée, immatriculée au registre du commerce et des sociétés de Paris sous le numéro 914 285 259, dont le siège social est situé 27, rue du chemin vert – 75011 PARIS (ci-après « le Prestataire ») et toute personne physique ou morale publique ou privée, qui agit à des fins entrant dans le cadre de son activité commerciale, industrielle, artisanale, libérale ou agricole, y compris lorsqu'elle agit au nom ou pour le compte d'un autre professionnel souhaitant recourir aux services ci-après définis du Prestataire (ci-après « le Client ») au moyen de la passation d'une commande ci-après définie (le « Contrat »)."
            )}
            <br />
            <br />
            {t(
              "Préalablement à toute commande ci-après définie, le Client reconnait avoir pris connaissance des présentes CGV et les avoir acceptées en cochant la case prévue à cet effet avant la mise en œuvre de la procédure de commande en ligne du site http://app.yvea.io ci-après définie. Toute commande implique l'adhésion sans réserve aux présentes conditions générales de vente qui prévalent sur toute autre condition."
            )}
          </p>
        </div>

        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t(
              "ARTICLE 2. Acceptation et opposabilité des présentes conditions générales de vente"
            )}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Le Client ne pourra pas passer commande sans avoir déclaré avoir pris connaissance des présentes Conditions Générales de Ventes et les avoir acceptées, lesquelles lui seront automatiquement soumises par le Site pour lecture. Aucun autre document que les présentes ne pourra créer d'obligations entre les parties ou déroger aux présentes à moins de faire l'objet d'un écrit signé par les parties."
            )}
            <br />
            <br />
            {t(
              "Le fait que le Prestataire ne se prévale pas à un moment donné de l'une quelconque des dispositions des présentes conditions générales de vente, ne peut en aucune manière être interprété comme valant renonciation de sa part à s'en prévaloir ultérieurement, notamment le fait de ne pas réclamer un paiement en retard. L'éventuelle annulation d'une clause n'affectera pas la validité des autres clauses des présentes."
            )}
            <br />
            <br />
            {t(
              "Le Client déclare par ailleurs être parfaitement informé que les présentes conditions générales de vente pourront être modifiées postérieurement à la passation de commande ce dont il sera informé par écrit. Le Client aura alors quarante-huit (48) heures à compter de cette notification de modification pour exprimer, par écrit, son éventuel désaccord avec les conditions générales de vente mises à jour. A défaut, il sera réputé les avoir acceptées."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 3. Description des services")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Sans que cette liste ne soit exhaustive, les services proposés par la Société sont les services internet du Site fournis au Client conformément aux présentes CGV et présentant les caractéristiques et les fonctions décrites sur le Site. Le Site permet à l'utilisateur (au sens des conditions générales d'utilisation présentes sur le Site) d'accéder notamment aux services suivants (les « Services ») :"
            )}
            <br />
          </p>
          <ul className={styles.cgv_list}>
            <li>
              {t(
                "Simulation des nomenclatures douanières applicables aux fins de vérification de la conformité des produits avant embarquement des produits à destination notamment des pays suivants : Algérie, Botswana, Burundi, Cameroun, Congo, Côte d'Ivoire, Gabon, Ghana, Egypte, Ethiopie, Libie, Mauritanie, Soudan du Sud, Tanzanie, Zanzibar ou de la Zimbabwe* ;"
              )}
            </li>
            <li>
              {t(
                "Estimation du coût du certificat de conformité (CoC) en hors taxes"
              )}
              ;
            </li>
            <li>
              {t(
                "Aide à la préparation du dossier de demande de certificat de conformité (CoC) ;"
              )}
            </li>
            <li>
              {t(
                "Transmission à l'organisme de certification compétent et gestion de l'instruction de la demande : renseigner les informations d'expédition et les documents demandés ;"
              )}
            </li>
            <li>
              {t(
                "Aide à l'enregistrement du carnet d'adresses sur le Site : Prestataires, acheteurs et lieux d'inspections ;"
              )}
            </li>
            <li>
              {t(
                "Stockage des documents communiqués par le Client sur son Compte Client (au sens des conditions générales d'utilisation présentes sur le Site) aux fins de constitution de son dossier de demande de certificat de conformité selon les conditions et modalités prévues dans la charte de protection des données consultable sur le Site ;"
              )}
            </li>
            <li>
              {t(
                "Aide à l'enregistrement des coordonnées des organismes de certification avec lesquels le Client a l'habitude de travailler le cas échéant ;"
              )}
            </li>
            <li>
              {t(
                "Prise de contact avec un expert YVEA via la page contact présente sur le Site."
              )}
            </li>
          </ul>
          <p>
            <br />
            <br />
            {t(
              "* Les informations indiquées lors de la simulation proviennent des sites internet des organismes mandataires. Ces organismes sont amenés à modifier à tout moment leurs informations compte tenu des législations propres à chaque pays destinataire. Le Prestataire ne saurait en aucun cas être tenue pour responsable d'une simulation erronée."
            )}
            <br />
            <br />
            {t(
              "Les Services commandés par le Client seront fournis selon les modalités suivantes :"
            )}
          </p>
          <br />
          <ul className={styles.cgv_list}>
            <li>
              {t(
                "Audit des informations et documents requis pour la constitution du dossier et transmis par le Client sur son Compte Client (au sens des CGU). Dans l'hypothèse où des documents seraient manquants, le Client sera alerté sur son Compte Client afin qu'il complète son dossier."
              )}
            </li>
            <li>
              {t(
                "Après validation des documents par le Prestataire, le dossier sera envoyé à l'organisme de certification."
              )}
            </li>
            <li>
              {t(
                "Dans l'hypothèse où des documents complémentaires seraient requis, le Client en sera alerté par email."
              )}
            </li>
            <li>
              {t(
                "Le Client sera informé par email de l'état d'avancement de son dossier selon les statuts suivants : En attente / Revue documentaire / Inspection de la marchandise / Documents finaux / Validé."
              )}
            </li>
            <li>
              {t(
                "Une fois le dossier validé par l'organisme de certification, le Prestataire communiquera le certificat de conformité au Client au format PDF."
              )}
            </li>
          </ul>
          <p>
            {t(
              "La prise en charge du dossier par le Prestataire se fait dans un délai de 48h (hors weekend et jours fériés) à compter de la validation définitive de la commande du Client, dans les conditions prévues aux présentes CGV à l'adresse email indiquée par le Client lors de sa commande sur le Site."
            )}
            <br />
            <br />
            {t(
              "Le Prestataire s'engage à faire ses meilleurs efforts pour fournir les Services commandés par le Client dans les meilleurs délais, étant précisé que le Client déclare être parfaitement informé que le Prestataire est tenu d'une obligation de moyens."
            )}
            <br />
            <br />
            {t(
              "Afin de faciliter la bonne exécution des Services, le Client s'engage à :"
            )}
            <br />
          </p>
          <ul className={styles.cgv_list}>
            <li>
              {t(
                "fournir au Prestataire des informations et documents complets, exacts et dans les délais nécessaires sans qu'il soit tenu d'en vérifier le caractère complet ou l'exactitude ;"
              )}
            </li>
            <li>
              {t(
                "avertir directement le Prestataire de toute difficulté éventuelle relative à l'exécution des Services."
              )}
            </li>
          </ul>
          <p>
            <br />
            <br />
            {t(
              "Le Prestataire ne sera pas responsable du retard pris en raison des délais de traitement du dossier par l'organisme de certification ou du comportement du Client qui tarderait à transmettre les documents requis ou les documents complémentaires aux fins d'instruction de sa demande de certificat de conformité."
            )}
            <br />
            <br />
            {t(
              "En cas de demande particulière du Client concernant les conditions de fourniture des Services, dûment acceptées par écrit par le Prestataire, les coûts y étant liés feront l'objet d'une facturation spécifique complémentaire ultérieure."
            )}
            <br />
            <br />
            {t(
              "A défaut de réserves ou réclamations expressément émises par le Client dans un délai de 48 heures à compter de la réception des Services à l'adresse mail : contact@yvea.io, ceux-ci seront réputés conformes à la commande, en quantité et qualité."
            )}
            <br />
            <br />
            {t(
              "Aucune réclamation ne pourra être valablement acceptée en cas de non-respect de ces formalités et délais par le Client."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>{t("ARTICLE 4. Commandes")}</h3>
          <p className={styles.article_paragraph}>
            {t(
              "Il appartient au Client de sélectionner sur le Site les Services qu'il souhaite commander, selon les modalités suivantes :"
            )}
          </p>
          <br />
          <ul className={styles.cgv_list}>
            <li>
              {t(
                "Après avoir créé son Compte Client (au sens des conditions générales d'utilisation présentes sur le Site), le Client doit renseigner les informations demandées afin de permettre la simulation des nomenclatures douanières applicables ainsi que la simulation du coût du certificat de conformité ;"
              )}
            </li>
            <li>
              {t(
                "Une fois les documents requis pour la création de la demande de certificat de conformité transmis sur le Site, le Client peut choisir de mandater le Prestataire aux fins de transmission à l'organisme de certification compétent et de gestion de l'instruction de la demande de certificat de conformité. Si cette option est choisie le Client pourra visualiser le montant du certificat de conformité. Toutefois, dans le cas où le client opte pour un traitement express, une option de traitement accéléré disponible pour certaines destinations, un coût supplémentaire sera également affiché en plus du montant du certificat ;"
              )}
            </li>
            <li>
              {t(
                "Une fois que le Client nous aura assigné le dossier, il sera automatiquement redirigé vers son tableau de bord personnel (dashboard), où il pourra suivre l'avancement de son dossier ;"
              )}
            </li>
            <li>
              {t(
                "Après l'obtention du certificat, le Client recevra une facture détaillée récapitulant les montants à régler ;"
              )}
            </li>
            <li>
              {t(
                "Le Client devra procéder au règlement de la facture par virement bancaire et nous fournir la preuve de virement avant de recevoir son certificat ;"
              )}
            </li>
            <li>
              {t(
                "La commande ne sera considérée comme valide qu'après paiement intégral du prix. Il est de la responsabilité du Client de vérifier l'exactitude de la commande et de signaler immédiatement toute erreur éventuelle ;"
              )}
            </li>
          </ul>
          <br />
          <br />
          {t(
            "Toute commande passée sur le Site constitue la formation d'un contrat conclu à distance entre le Client et le Prestataire. Le Prestataire se réserve le droit d'annuler ou de refuser toute commande émanant d'un Client avec lequel il existerait un litige relatif au paiement d'une commande antérieure."
          )}
          <br />
          <br />
          {t(
            "Le Client pourra suivre l'évolution de sa commande en consultant son compte client (tel que défini dans les conditions générales d'utilisation disponibles sur le Site)."
          )}
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>{t("ARTICLE 5. Prix")}</h3>
          <p className={styles.article_paragraph}>
            {t(
              "Les Services sont fournis aux tarifs en vigueur figurant sur le Site, lors de l'enregistrement de la commande par le Prestataire (le « Prix »)."
            )}
            <br />
            <br />
            {t("Les prix sont exprimés en Euros, HT et TTC.")}
            <br />
            <br />
            {t(
              "Les tarifs tiennent compte d'éventuelles réductions qui seraient consenties par le Prestataire sur le Site."
            )}
            <br />
            <br />
            {t(
              "Ces tarifs sont fermes et non révisables pendant leur période de validité."
            )}
            <br />
            <br />
            {t(
              "Le Client est informé que le Prix des Services ne comprend pas le montant du certificat de conformité qui est fixé indépendamment de la volonté du Prestataire par le gouvernement du pays destinataire des produits selon la quantité et les produits en question."
            )}
            <br />
            <br />
            {t(
              "Le récapitulatif de la commande avant le règlement fera apparaitre distinctement le Prix des Services et le coût du certificat de conformité."
            )}
            <br />
            <br />
            {t(
              " Le Client est en outre parfaitement informé que compte tenu de la modification de législation qui peut intervenir dans les pays destinataires des produits qui nécessitent un certificat de conformité, le coût du certificat de conformité peut changer, sans que le Prestataire ne puisse en être tenu pour responsable. Le Prix ne comprend pas non plus les frais de traitement, d'expédition, de transport et de livraison, qui sont facturés en supplément, dans les conditions indiquées sur le Site et calculés préalablement à la passation de la commande. Des droits de douane ou autres taxes locales ou droits d'importation ou taxes d'état sont susceptibles d'être appliqués selon le pays de destination des marchandises."
            )}
            <br />
            <br />
            {t(
              "Une facture est établie par le Prestataire et remise au Client lors de la fourniture des Services commandés."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 6. Conditions de règlement")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Le règlement du Prix se fera par virement bancaire aux coordonnées bancaires qui figureront sur la facture. Le paiement doit être effectué dans un délai maximum de 30 jours à compter de la réception de la facture."
            )}
            <br />
            <br />
            {t(
              "Le Client devra fournir la preuve du virement afin de recevoir son certificat. La preuve de virement doit être transmise au Prestataire par courrier électronique ou tout autre moyen de communication convenu entre les parties."
            )}
            <br />
            <br />
            {t(
              "Les données de paiement et les informations de virement seront traitées de manière confidentielle et sécurisée."
            )}
            <br />
            <br />
            {t(
              "En cas de non-paiement dans le délai imparti, le Prestataire se réserve le droit de suspendre la délivrance du certificat jusqu'à réception du paiement intégral du Prix."
            )}
            <br />
            <br />
            {t(
              "Les paiements effectués par le Client seront considérés comme définitifs après encaissement effectif des sommes dues, par le Prestataire."
            )}
            <br />
            <br />
            {t(
              "Le Prestataire ne sera pas tenu de procéder à la fourniture des Services commandés par le Client si celui-ci ne lui en paye pas le prix en totalité dans les conditions ci-dessus indiquées."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 7. Droit de rétractation")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "En qualité de professionnel, le Client ne bénéficiera d'aucun droit de rétractation."
            )}
            <br />
            <br />
            {t(
              "Le contrat est donc conclu de façon définitive dès la passation de la commande par le Client selon les modalités précisées aux présentes CGV."
            )}
            <br />
            <br />
            {t(
              "Toutefois, et conformément aux dispositions de l'article L. 221-3 du Code de la consommation, le Client bénéficie d'un droit de rétractation si la Commande passée n'entre pas dans son champ d'activité principale et que le nombre de salariés employés par lui est inférieur ou égal à cinq (5). Dans cette hypothèse seulement, le Client dispose d'un délai de quatorze (14) jours pour exercer son droit de rétractation sans avoir à motiver sa décision à compter du jour de la conclusion du contrat. L'exercice du droit de rétractation s'exerce au choix du Client via l'utilisation d'un formulaire de rétractation, soit par toute autre déclaration dénuée d'ambiguïté exprimant sa volonté de se rétracter. Dès lors que le Client aura valablement exprimé sa volonté de rétractation, le Prestataire procèdera alors au remboursement de la commande."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 8. Limite de garantie")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Le Prestataire garantit qu'il fournira les Services d'une manière professionnelle en conformité avec les caractéristiques de service. Si les Services qui sont fournis au Client n'ont pas été effectués comme garantis, le Client doit le notifier par écrit au Prestataire par le biais de son service assistance ouvert du lundi au vendredi de 9h00 à 17h00."
            )}
            <br />
            <br />
            {t(
              "Le Prestataire ne garantit pas que les Services seront exemptés d'erreur ou exécutés de manière ininterrompue ou qu'il corrigera toutes les erreurs des Services. Le Client reconnait que le Prestataire ne contrôle pas le transfert de données par les moyens de communication, y compris internet, et que les Services peuvent faire l'objet de limites, délais et autres problèmes inhérents à l'utilisation de telles installations de communication. Le Prestataire n'est pas responsable des retards, non-distribution ou autres problèmes inhérents à l'utilisation de tels moyens de communication."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 9. Garantie de contrefaçon")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Le Prestataire garantit qu'il dispose de tous les droits de propriété intellectuelle permettant de fournir les Services et que les Services fournis ne portent pas atteinte à des droits de tiers, ni ne constituent une contrefaçon d'une œuvre préexistante."
            )}
            <br />
            <br />
            {t(
              "Le Prestataire garantit le Client contre toute action en contrefaçon qui pourrait être intentée à son encontre par toute personne physique ou morale se prévalant d'un droit de propriété intellectuelle portant sur les Services."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 10. Limitation de responsabilité")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "En l'absence d'intention ou de négligence grave, le Prestataire ne pourra, en aucun cas, être responsable des pertes indirectes, pertes de profits ou d'économies, de pertes de revenus, pertes de données."
            )}
            <br />
            <br />
            {t(
              " Le Client ne pourra pas prétendre à une réduction de paiement, à des dommages et intérêts, ou à d'autres sanctions en cas d'interruptions ou d'erreurs empêchant la transmission des données qui ne sont pas dues à une négligence grave de la part du Prestataire."
            )}
            <br />
            <br />
            {t(
              "En tout état de cause, la responsabilité totale du Prestataire pour tous les dommages au titre du présent contrat sera limitée aux sommes effectivement payées par le Client pour les Services au cours des douze (12) mois précédant immédiatement l'évènement donnant lieu à ladite responsabilité."
            )}
            <br />
            <br />
            {t(
              "Le Client répondra seul des conséquences liées aux préjudices subis par le Prestataire et les tiers du fait de ses agissements fautifs. Dans l'hypothèse où le Prestataire serait attrait en justice en raison d'agissements fautifs du Client, ce dernier s'engage à le garantir de toute condamnation et tout frais de justice pouvant en découler."
            )}
            <br />
            <br />
            {t(
              "En cas de défauts majeurs qui empêchent sérieusement l'utilisation des Services par le Client et qui sont imputables au Prestataire, le Prestataire s'engage à agir pour corriger ce défaut sans retard excessif. En l'absence d'intention ou de négligence grave de la part du Prestataire, ce dernier n'assumera par ailleurs aucune responsabilité se rapportant aux défauts ou défaillances dans les Services. Les notifications d'erreurs devront être remises par le Client conformément aux instructions annoncées par le Prestataire sur le Site et dans un délai raisonnable suivant la découverte du défaut."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 11. Données personnelles")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Conformément au règlement n° 2016-679 du Parlement européen et du Conseil en date du 27 avril 2016, dit RGPD, relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données, en complément de la loi n° 78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés, le Prestataire a mis en place une charte de protection des données à caractère personnel dont le Client reconnait avoir pris connaissance, préalablement à la passation de toute Commande."
            )}
            <br />
            <br />
            {t(
              "Le Client déclare être parfaitement informé que toutes données autres que les données à caractère personnel au sens de l'article 4 dudit RGPD (ci-après « les Données ») pourront pendant la durée du Contrat, être exploitées par le Prestataire à des fins statistiques et de prospection commerciales, sauf avis contraire exprimé par écrit par le Client et sous réserve qu'elles présentent un intérêt d'amélioration des Services."
            )}
            <br />
            <br />
            {t(
              "Ces Données n'incorporeront pas d'informations confidentielles sous une forme qui pourrait servir à identifier le Client ou toute personne physique."
            )}
            <br />
            <br />
            {t(
              "Les Données seront conservées par le Prestataire pendant une durée de cinq (5) ans à compter de la réalisation des Services et pourront être transmises au Client."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 12. Propriété intellectuelle")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Le Prestataire conserve tous les droits de propriété et de propriété intellectuelle pour les Services, y compris le Site et les œuvres dérivées de ceux-ci, et sur tout ce qui a été développé ou remis par ou pour le compte du Prestataire en vertu des présentes."
            )}
            <br />
            <br />
            {t(
              "Les documents (modèles, textes de lois, etc.) mis à la disposition des Clients sont destinés exclusivement à être utilisés pour constituer le dossier de demande de certificat de conformité. Tout autre usage, y compris la mise à disposition ou la communication à des tiers par le Client ou l'un de ses membres, à titre commercial ou gratuit, est interdite et passible de poursuites, conformément au Code la propriété intellectuelle."
            )}
            <br />
            {t(
              "En outre l'utilisation de ces documents par le Client n'est plus autorisée après la fin du Contrat pour quelque cause que ce soit."
            )}
            <br />
            <br />
            {t(
              "Les dispositions du paragraphe ci-dessus s'appliquent également aux états produits par le Site sous la forme de fichiers au format Microsoft Excel ou PDF. En outre ces fichiers ne peuvent en aucun cas être utilisés comme modèles pour la gestion d'un autre dossier de demande de certificat de conformité que celui pour lequel le Compte client a été ouvert."
            )}
            <br />
            <br />
            {t("Il est fait interdiction au Client :")}
            <br />
          </p>
          <ul className={styles.cgv_list}>
            <li>
              {t(
                "D'enlever ou de modifier les mentions relatives à la propriété du Prestataire sur le Site ;"
              )}
            </li>
            <li>
              {t(
                "De mettre le Site ou les composants résultants des Services à la disposition de tiers autres que ceux dont l'accès aux Services a été expressément autorisé ;"
              )}
            </li>
            <li>
              {t(
                "De modifier, créer des œuvres dérivées, désassembler, décompiler, réaliser de la rétroconception, reproduire, republier, télécharger quelconque partie des Services et plus généralement d'accéder ou d'utiliser les Services afin de construire ou de fournir directement ou indirectement un Service concurrent ."
              )}
            </li>
          </ul>
          <br />
          <br />
          <p>
            {t(
              "Le Prestataire se réserve le droit de procéder à des modifications dans la conception, la méthode de fonctionnement, les spécifications techniques, les systèmes et toute autre fonction des Services, et ce à tout moment sans notification préalable. Ces modifications de Services n'entraineront pas une réduction du niveau d'exécution ou de disponibilité des Services applicables qui sont fournis au Client pour la durée susvisée."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 13. Force majeure")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Les parties ne seront pas réputées avoir manqué à leurs obligations si elles sont empêchées d'exécuter tout ou partie de celles-ci à la suite d'un cas de force majeure entendu au sens de l'article 1218 du code civil et de la jurisprudence, sous réserve que la partie empêchée en informe l'autre partie, par lettre recommandée avec avis de réception, dans les trois (3) jours calendaires de la survenance de l'évènement et justifie du caractère de force majeure."
            )}
            <br />
            <br />
            {t(
              "La partie empêchée fera ses meilleurs efforts pour limiter et/ou éviter les effets du cas de force majeure et tentera de trouver une solution adaptée afin de reprendre l'exécution de ses obligations dans les meilleurs délais."
            )}
            <br />
            <br />
            {t(
              "Si l'exécution de l'une des obligations essentielles de l'une ou l'autre partie est différée du fait de la survenance d'un évènement de force majeure, l'exécution sera suspendue jusqu'à la disparition dudit évènement. Toutefois, dans l'hypothèse où l'évènement de force majeure se prolongerait au-delà d'un (1) mois, chacune des parties aurait la faculté de résilier de plein droit avec effet immédiat le Contrat par l'envoi d'une lettre recommandée avec avis de réception."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 14. Modifications")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Le Prestataire se réserve le droit de faire évoluer le contenu des Services, mais il s'engage à conserver les fonctionnalités existantes. Il peut donc enrichir ces fonctionnalités et/ou en proposer de nouvelles. Si de nouvelles fonctionnalités sont intégrées aux Services, le Client bénéficie des nouvelles fonctionnalités sans coût supplémentaire, sauf si le Prestataire décide de les proposer sous la forme d'options payantes, auquel cas le Client devra souscrire à ces options pour en bénéficier."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>{t("ARTICLE 15. Cession")}</h3>
          <p className={styles.article_paragraph}>
            {t(
              "Le Prestataire et le Client ne sont pas autorisés à céder le Contrat, ou à donner ou transférer les Services, ou un droit sur ceux-ci, à une autre personne physique ou morale, sauf accord exprès et écrit des parties."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 16. Assistance")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Le Prestataire fournit au Client une assistance et une information se rapportant à l'utilisation des Services par le biais de pop-ups explicatifs lors de la première connexion du Client à son Compte Client (au sens des CGU). Le Prestataire fournit également une assistance au Client par e-mail et téléphone. Cette assistance est fournie du lundi au vendredi (à l'exception des jours fériés ayant cours en France) de 9 heures à 17 heures."
            )}
            <br />
            <br />
            {t(
              "Les demandes et/ou les avertissements d'erreurs devront être soumis au Prestataire à l'adresse mail suivante : contact@yvea.io (Objet : Erreur)."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 17. Dispositions générales")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Le Contrat est élaboré en français et cette langue sera la langue de référence à tous égards et prévaudra sur toutes les autres."
            )}
            <br />
            <br />
            {t(
              "Si une disposition des présentes était déclarée inapplicable pour quelque raison que ce soit, les autres dispositions demeureront pleinement en vigueur. La disposition inapplicable sera modifiée dans la mesure du possible et dans la limite autorisée par la loi pour atteindre autant que faire se peut la même intention et le même effet économique que la disposition originale."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 18. Loi applicable")}
          </h3>
          <p className={styles.article_paragraph}>
            {t(
              "Tout litige relatif à l'interprétation, à l'application ou à l'exécution des présentes conditions générales de vente et du présent contrat est soumis au droit français. Les présentes conditions générales de vente ainsi que le présent contrat sont intégralement rédigées en français, seule langue faisant foi dans les relations entre les parties en cas de litige."
            )}
            <br />
            <br />
            {t(
              "En cas de litige et/ou réclamation, il est recommandé au Client de se rapprocher du Prestataire afin de rechercher et de trouver une solution amiable. Les éventuels litiges qui pourraient survenir à l'occasion de l'exécution des présentes et du Contrat, devront être explicités et justifiés par écrit (courrier recommandé avec accusé de réception) pour qu'ils puissent être compris et traités par le Prestataire."
            )}
            <br />
            <br />
            {t(
              "A défaut d'accord amiable entre les parties, le litige sera soumis aux tribunaux compétents de Paris."
            )}
          </p>
        </div>
        <div className={styles.cgv_article}>
          <h3 className={styles.article_title}>
            {t("ARTICLE 19. Nous contacter")}
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
