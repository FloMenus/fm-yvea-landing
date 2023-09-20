import styles from "./style.module.css";
import Link from "next/link";

import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");
  return (
    <>
      <footer className={styles.footer}>
        <Image
          width={205}
          height={74}
          className={styles.logo}
          src="/medias/logo/logo_and_yvea.svg"
          alt="logo"
        />
        <div className={styles.links_container}>
          <div className={styles.links_column}>
            <p className={styles.link_title}>{t("Légal")}</p>
            <Link href="/contracts/cgu" className={styles.link}>
              {t("CGU")}
            </Link>
            <Link href="/contracts/cgv" className={styles.link}>
              {t("CGV (SaaS)")}
            </Link>
            <Link href="/contracts/legal-mentions" className={styles.link}>
              {t("Mentions légales")}
            </Link>
            <Link href="/contracts/privacy" className={styles.link}>
              {t("Politiques de confidentialité")}
            </Link>
          </div>
          <div className={styles.links_column}>
            <p className={styles.link_title}>{t("Offre")}</p>
            <Link href="/services/pvoc" className={styles.link}>
              {t("Service")}
            </Link>
            <Link href="/support" className={styles.link}>
              {t("Accompagnement")}
            </Link>
            <Link href="/pricing" className={styles.link}>
              {t("Tarifs")}
            </Link>
          </div>
          <div className={styles.links_column}>
            <p className={styles.link_title}>{t("Réseaux")}</p>
            <a
              href="https://www.linkedin.com/company/yvea/?viewAsMember=true"
              className={styles.link}
              target="_blank"
            >
              {t("LinkedIn")}
            </a>
          </div>
        </div>
        <div className={styles.logo_faded_container}>
          <Image
            width={497}
            height={281}
            src="/medias/logo/logo_faded.svg"
            className={styles.logo_faded}
            alt="logo faded"
          />
        </div>
        <div className={styles.cta}>
          <h5 className={styles.cta_title}>
            {t("Pré-inscrivez-vous dès maintenant")}
          </h5>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSemoVIH-3smSe3CnBAoQvMzHLSzsl8Sh69O7Ajv1ofWq6fqyA/viewform"
            target="_blank"
            className={styles.cta_button}
          >
            {t("Pré-inscription")}
          </Link>
        </div>
      </footer>
    </>
  );
}
