import styles from "./style.module.css";
import Image from "next/image";

import { useTranslation } from "react-i18next";

export default function ReviewsSection() {
  const { t } = useTranslation();
  return (
    <div className={styles.reviews_container}>
      <h3 className={styles.reviews_title}>{t("Ce qu'en disent vos pairs")}</h3>
      <div className={styles.reviews}>
        <div className={styles.review}>
          <div className={styles.review_top}>
            <p className={styles.review_testimonial}>
              {t(
                "Une solution simple mais puissante pour les exportateurs. Merci YVEA !"
              )}
            </p>
          </div>
          <div className={styles.review_bottom}>
            <Image
              width={52}
              height={52}
              className={styles.review_image}
              src="/fm-yvea-landing/medias/avatars/businesswoman.png"
              alt="Businesswoman image"
            />
            <div className={styles.review_author}>
              <h4 className={styles.review_name}>Laurence RAGAIGNE</h4>
              <h5 className={styles.review_job}>
                Export Sales Administration,
                <br />
                DANUBE INTERNATIONAL
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.review}>
          <div className={styles.review_top}>
            <p className={styles.review_testimonial}>
              {t(
                "Pas de perte de temps sur le dossier d'inspection documentaire, YVEA se charge de tout !"
              )}
              <br />
              {t("Je recommande vivement !")}
            </p>
          </div>
          <div className={styles.review_bottom}>
            <Image
              width={52}
              height={52}
              className={styles.review_image}
              src="/fm-yvea-landing/medias/avatars/businesswoman2.png"
              alt="Businesswoman image"
            />
            <div className={styles.review_author}>
              <h4 className={styles.review_name}>Sabrina DAEL</h4>
              <h5 className={styles.review_job}>
                Export Coordinator,
                <br />
                MIDAS (MESA SP)
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
}
