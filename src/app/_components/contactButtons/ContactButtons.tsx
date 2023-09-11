"use client";
import "./style.css";

import { useState } from "react";
import ModalComponent from "../modal/Modal";
import { Widget } from "@typeform/embed-react";
import { InlineWidget } from "react-calendly";
import Image from "next/image";

export default function ContactButtons() {
  const [openPhone, setOpenPhone] = useState(false);
  const [openMail, setOpenMail] = useState(false);
  return (
    <>
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
          id="brJmmHYw?typeform-source=yvea.io"
          className="typeform-inline-widget"
          style={{ width: "100%", height: "100%", padding: 0 }}
        />
      </ModalComponent>

      <div className="contact_buttons">
        <button
          onClick={() => setOpenPhone(true)}
          className="contact_button call"
        >
          <img src="/medias/telephone.png" alt="call" />
          <h5 className="contact_button_title">Appeler</h5>
        </button>
        <button
          onClick={() => setOpenMail(true)}
          className="contact_button mail"
        >
          <img src="/medias/mail.png" alt="mail" />
          <h5 className="contact_button_title">Prendre rendez-vous</h5>
        </button>
      </div>
    </>
  );
}
