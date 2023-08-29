"use client";
import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { languagesData } from "./languageData";

export default function LanguageSelector() {
  const [country, setCountry] = useState("uk");
  const [activated, activate] = useState(false);

  const handleMouseEnter = () => {
    activate(true);
  };

  const handleMouseLeave = () => {
    activate(false);
  };

  return (
    <div
      className={`${styles.language_selector} 
        ${activated ? styles.language_selector_hover : ""}`}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className={styles.flag} src={`/medias/countries/${country}.png/`} />
      {activated && (
        <div
          className={`${styles.dropdown} ${
            activated ? styles.dropdown_hover : ""
          }`}
        >
          <ul className={styles.dropdown_content}>
            {languagesData.map((child) => (
              <li
                className={styles.dropdown_item}
                onClick={() => setCountry(child.iso)}
              >
                <p className={styles.dropdown_item_title}>{child.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
