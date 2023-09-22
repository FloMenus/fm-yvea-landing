"use client";
import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { languagesData } from "./languageData";
import { useTranslation } from "react-i18next";

import Image from "next/image";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [country, setCountry] = useState(i18n.language);
  const [activated, activate] = useState(false);

  const handleMouseEnter = () => {
    activate(true);
  };

  const handleMouseLeave = () => {
    activate(false);
  };

  const handleLanguageChange = (iso: string) => {
    i18n.changeLanguage(iso);
    setCountry(iso);
  };

  useEffect(() => {
    setCountry(i18n.language);
  }, [i18n.language]);

  return (
    <div
      className={`${styles.language_selector} 
        ${activated ? styles.language_selector_hover : ""}`}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={styles.flag}
        src={
          country
            ? `/medias/countries/${country}.png/`
            : "/medias/countries/FR.png/"
        }
        alt="flag"
      />
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
                onClick={() => handleLanguageChange(child.iso)}
                key={child.title}
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
