import styles from "./styles.module.css";
import { applicationData } from "../data";

export default function NavigationDots({
  activeIndex,
  onClick,
  disabled,
}: {
  activeIndex: number;
  onClick: (index: number) => void;
  disabled: boolean;
}) {
  return (
    <div className={styles.navigation_dots}>
      {applicationData.map((el, i) => (
        <button
          key={i}
          className={`${styles.navigation_dot} ${
            i === activeIndex ? styles.active : ""
          }`}
          onClick={() => onClick(i)}
          disabled={disabled}
          title="Changer de slide"
        ></button>
      ))}
    </div>
  );
}
