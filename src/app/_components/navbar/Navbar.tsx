"use client";
import "./style.css";
import Link from "next/link";
import LinkElement from "./link/LinkElement";
import { LinkProps } from "next/dist/client/link";
import LanguageSelector from "./languageSelector/LanguageSelector";

import { data } from "./link/data";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isNavBarHidden, setIsNavBarHidden] = useState(false);

  useEffect(() => {
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
    <header className={`navbar ${isNavBarHidden ? "hidden" : ""}`}>
      <div className="navbar_container">
        <Link href="/">
          <img className="logo" src="/medias/logo/logo_and_yvea.svg" />
        </Link>
        <nav className="links_container">
          {data.map((child) => (
            <LinkElement>{child}</LinkElement>
          ))}
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
}
