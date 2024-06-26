"use client";
import "./style.css";

import { useState } from "react";
import ModalComponent from "../modal/Modal";
import { Widget } from "@typeform/embed-react";
import { InlineWidget } from "react-calendly";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ContactButtons() {
  const { i18n } = useTranslation();
  const [openPhone, setOpenPhone] = useState(false);
  const [openMail, setOpenMail] = useState(false);

  return (
    <>
      {console.log(i18n.language)}
      {/* Phone modal */}
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
            i18n.language === "fr"
              ? "https://l697wovmila.typeform.com/to/r0SoBnz8"
              : i18n.language === "en"
              ? "https://l697wovmila.typeform.com/to/PVjaWpM5"
              : "https://l697wovmila.typeform.com/to/r0SoBnz8"
          }
          className="typeform-inline-widget"
          style={{ width: "100%", height: "100%", padding: 0 }}
        />
      </ModalComponent>

      <div className="contact_buttons">
        <button
          onClick={() => setOpenPhone(true)}
          className="contact_button call"
        >
          <Image
            width={28}
            height={28}
            src="/medias/telephone.png"
            alt="call"
          />
          <h5 className="contact_button_title">Appeler</h5>
        </button>
        <button
          onClick={() => setOpenMail(true)}
          className="contact_button mail"
        >
          <Image width={28} height={28} src="/medias/mail.png" alt="mail" />
          <h5 className="contact_button_title">Prendre rendez-vous</h5>
        </button>
      </div>
    </>
  );
}
