"use client";
import styles from "./style.module.css";
import Link from "next/link";
// import Dropdown from "../../dropdown/Dropdown";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import ModalComponent from "../../modal/Modal";
import { Widget } from "@typeform/embed-react";
import { InlineWidget } from "react-calendly";

export interface Sublink {
  title: string;
  url: string;
}

export interface SubElement {
  title: string;
}

export interface LinkElement {
  title: string;
  url: string;
  sublinks: Sublink[];
  subElements: SubElement[];
}

export default function LinkElement({ children }: { children: LinkElement }) {
  const [activated, activate] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);
  const [openMail, setOpenMail] = useState(false);

  const { t } = useTranslation("navbar");
  const { i18n } = useTranslation();

  const handleMouseEnter = () => {
    activate(true);
  };

  const handleMouseLeave = () => {
    activate(false);
  };

  const handleClickPhone = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    setOpenPhone(true);
  };

  const handleClickMail = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    setOpenMail(true);
  };

  return (
    // @Faire: Reorganise this code to have components splitted
    <>
      <ModalComponent open={openPhone} handleClose={() => setOpenPhone(false)}>
        <InlineWidget
          url="https://calendly.com/moamen-elmasry"
          styles={{
            height: "100%",
            width: "100%",
            padding: 0,
          }}
        />
      </ModalComponent>

      {/* Mail modal */}
      <ModalComponent open={openMail} handleClose={() => setOpenMail(false)}>
        <Widget
          id={
            i18n.language === "FR"
              ? "https://l697wovmila.typeform.com/to/r0SoBnz8"
              : i18n.language === "EN"
              ? "https://l697wovmila.typeform.com/to/PVjaWpM5"
              : "https://l697wovmila.typeform.com/to/r0SoBnz8"
          }
          className="typeform-inline-widget"
          style={{ width: "100%", height: "95%", padding: 0 }}
        />
      </ModalComponent>

      <Link
        href={children.url}
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p
          className={`${styles.link_title} ${
            activated ? styles.link_title_hover : ""
          }`}
        >
          {t(children.title)}
        </p>

        {/* LINKS MAPPING */}
        {children.sublinks?.length > 0 && activated && (
          <>
            <div
              className={`${styles.dropdown} ${
                activated ? styles.dropdown_hover : ""
              }`}
            >
              <ul className={styles.dropdown_content}>
                {children.sublinks.map((child) => (
                  <li className={styles.dropdown_item} key={child.title}>
                    <Link href={child.url}>
                      <p className={styles.dropdown_item_title}>
                        {child.title}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* ELEMENTS MAPPING */}
        {children.subElements?.length > 0 && activated && (
          <>
            <div
              className={`${styles.dropdown} ${
                activated ? styles.dropdown_hover : ""
              }`}
            >
              <ul className={styles.dropdown_content}>
                {children.subElements.map((child) => (
                  <li
                    onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) =>
                      child.title === "Réserver un échange"
                        ? handleClickPhone(e)
                        : child.title === "Écrivez-nous"
                        ? handleClickMail(e)
                        : null
                    }
                    className={styles.dropdown_item}
                    key={child.title}
                  >
                    <p className={styles.dropdown_item_title}>
                      {t(child.title)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </Link>
    </>
  );
}
