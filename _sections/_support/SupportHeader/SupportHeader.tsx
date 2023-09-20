import styles from "./style.module.css";

import { useTranslation } from "react-i18next";

export default function SupportHeader() {
  const { t } = useTranslation("support");
  return (
    <div className={styles.support_header}>
      <h2 className={styles.support_header_title}>
        <span>{t("Optimisez")}</span>
        {t(" votre temps")},
        <br />
        <span>{t("maximisez")}</span>
        {t(" votre valeur grâce à votre partenaire dédié")}
      </h2>
      <div className={styles.support_header_quote}>
        <p className={styles.support_header_quote_text}>
          {t(
            "'Avoir du temps, c’est posséder le bien le plus précieux pour celui qui aspire à de grandes choses.'"
          )}
        </p>
        <p className={styles.support_header_quote_author}>
          {t("Plutarque, philosophe grec, 46 après J.-C.")}
        </p>
      </div>
    </div>
  );
}
