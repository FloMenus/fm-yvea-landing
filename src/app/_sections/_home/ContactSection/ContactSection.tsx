import styles from "./style.module.css";

export default function ContactSection() {
  return (
    <div className={styles.contact_container}>
      <img
        className={styles.geometric}
        src="/medias/geometric1.svg"
        alt="earth"
      />
      <img
        className={styles.geometric2}
        src="/medias/geometric1.svg"
        alt="earth"
      />
      <img
        className={styles.geometric3}
        src="/medias/geometric2.svg"
        alt="earth"
      />
    </div>
  );
}
