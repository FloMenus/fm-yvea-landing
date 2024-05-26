import styles from "./style.module.css";
import Image from "next/image";

export default function Pricing() {
  return (
    <div className={styles.pricing_container}>
      <div className={styles.pricing}>
        <div className={styles.pricing_text}>
          <h2 className={styles.pricing_title_main}>
            Tarification en toute simplicité
          </h2>
          <p className={styles.pricing_description}>
            Notre objectif est de rendre l'exportation accessible à tous, sans
            considération budgétaire. Découvrez comment notre tarification
            transparente répond à vos besoins.
          </p>
        </div>
        <Image
          width={200}
          height={200}
          src="/fm-yvea-landing/medias/price.png"
          alt="pricing_header"
        />
      </div>
      <div className={styles.pricing}>
        <div className={styles.pricing_text}>
          <h3 className={styles.pricing_title}>Ce que nous offrons</h3>
          <h4 className={styles.pricing_subtitle}>Accompagnement gratuit</h4>
          <p className={styles.pricing_description}>
            Lorsque vous nous confiez le choix de l'organisme certificateur,
            vous bénéficiez d'un accompagnement complet, sans frais
            supplémentaires. Créez vos demandes, et nous nous occupons de tout,
            de la présentation à l'organisme certificateur jusqu'à l'obtention
            du certificat final.
          </p>
          <h4 className={styles.pricing_subtitle}>
            Option de choix d'organisme
          </h4>
          <p className={styles.pricing_description}>
            Si vous préférez sélectionner l'organisme avec lequel nous
            travaillons, vous avez cette liberté. Cependant, cette option
            engendre un coût supplémentaire de 39,95€ HT. Néanmoins, vous
            continuerez à bénéficier de notre service d'accompagnement de
            qualité.
          </p>
        </div>
      </div>
      <div className={styles.pricing}>
        <div className={styles.pricing_text}>
          <h3 className={styles.pricing_title}>Notre engagement</h3>
          <p className={styles.pricing_description}>
            Chez YVEA, nous sommes dédiés à fournir un service d'excellence qui
            allie qualité, rapidité et accessibilité. Notre équipe s'engage à
            accélérer vos démarches d'exportation tout en maintenant une
            accessibilité universelle. Notre tarification reflète ces valeurs,
            conçue pour répondre aux besoins exigeants des professionnels de
            l'exportation, sans compromis sur la simplicité et l'excellence. En
            choisissant YVEA, vous optez pour un service de calibre mondial,
            centré sur votre réussite internationale.
          </p>
        </div>
      </div>
    </div>
  );
}
