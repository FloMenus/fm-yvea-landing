"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import LinkElement from "./link/LinkElement";
// import { LinkProps } from "next/dist/client/link";
import LanguageSelector from "./languageSelector/LanguageSelector";

import { data } from "./link/data";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isNavBarHidden, setIsNavBarHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setIsNavBarHidden(false);
      } else {
        setIsNavBarHidden(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`${styles.navbar} ${isNavBarHidden ? styles.hidden : ""}`}
    >
      <div className={styles.navbar_container}>
        <Link href="/">
          <Image
            height={48}
            width={133}
            className={styles.lgo}
            src="/medias/logo/logo_and_yvea.svg"
            alt="logo"
          />
        </Link>
        <nav className={styles.links_container}>
          {data.map((child) => (
            // @ts-ignore
            <LinkElement key={child.id}>{child}</LinkElement>
          ))}
          <></>
        </nav>
        {/* @Faire: Activer Language Selector */}
        <div className={styles.language_selector}>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
