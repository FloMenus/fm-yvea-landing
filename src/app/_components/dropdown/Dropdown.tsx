// convert to client side rendering
"use client";
import style from "./style.module.css";
import Link from "next/link";
import { Sublink } from "../navbar/link/LinkElement";
import LinkElement from "../navbar/link/LinkElement";

export default function Dropdown({ children }: { children: Sublink[] }) {
  return (
    <div className={style.dropdown}>
      <ul className={style.dropdown_content}>
        {children.map((child) => (
          <li className={style.dropdown_item}>
            <Link href={child.url}>
              <p className={style.dropdown_item_title}>{child.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
