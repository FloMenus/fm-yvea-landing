import styles from "./style.module.css";
import Link from "next/link";

import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img
          className={styles.logo}
          src="/medias/logo/logo_and_yvea.svg"
          alt="logo"
        />
        <div className={styles.links_container}>
          <div className={styles.links_column}>
            <p className={styles.link_title}>Légal</p>
            <Link href="/contracts/cgu" className={styles.link}>
              CGU
            </Link>
            <Link href="/contracts/cgv" className={styles.link}>
              CGV (SaaS)
            </Link>
            <Link href="/contracts/legal-mentions" className={styles.link}>
              Mentions Légales
            </Link>
            <Link href="/contracts/privacy-policy" className={styles.link}>
              Politiques de confidentialité
            </Link>
          </div>
          <div className={styles.links_column}>
            <p className={styles.link_title}>Offre</p>
            <Link href="/services/pvoc" className={styles.link}>
              Service
            </Link>
            <Link href="/support" className={styles.link}>
              Accompagnement
            </Link>
            <Link href="/pricing" className={styles.link}>
              Tarifs
            </Link>
          </div>
          <div className={styles.links_column}>
            <p className={styles.link_title}>Réseaux</p>
            <a
              href="https://www.linkedin.com/company/yvea/?viewAsMember=true"
              className={styles.link}
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className={styles.logo_faded_container}>
          <img
            src="/medias/logo/logo_faded.svg"
            className={styles.logo_faded}
            alt="logo faded"
          />
        </div>
        <div className={styles.cta}>
          <h5 className={styles.cta_title}>
            Pré-inscrivez-vous dès maintenant
          </h5>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSemoVIH-3smSe3CnBAoQvMzHLSzsl8Sh69O7Ajv1ofWq6fqyA/viewform"
            target="_blank"
            className={styles.cta_button}
          >
            Pré-inscription
          </Link>
        </div>
      </footer>
    </>
  );
}
