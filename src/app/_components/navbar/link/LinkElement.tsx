"use client";
import styles from "./style.module.css";
import Link from "next/link";
// import Dropdown from "../../dropdown/Dropdown";
import { useState } from "react";

export interface Sublink {
  title: string;
  url: string;
}

export interface LinkElement {
  title: string;
  url: string;
  sublinks: Sublink[];
}

export default function LinkElement({ children }: { children: LinkElement }) {
  const [activated, activate] = useState(false);

  const handleMouseEnter = () => {
    activate(true);
  };

  const handleMouseLeave = () => {
    activate(false);
  };

  return (
    <>
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
          {children.title}
        </p>
        {children.sublinks?.length > 0 && activated && (
          <>
            <div
              className={`${styles.dropdown} ${
                activated ? styles.dropdown_hover : ""
              }`}
            >
              <ul className={styles.dropdown_content}>
                {children.sublinks.map((child) => (
                  <li className={styles.dropdown_item}>
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
      </Link>
    </>
  );
}
