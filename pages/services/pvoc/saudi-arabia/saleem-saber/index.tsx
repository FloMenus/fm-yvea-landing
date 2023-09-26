"use client";

import styles from "./style.module.css";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Modal, Box } from "@mui/material";

import Board from "./board/Board";

export default function SaleemSaber() {
  const { t } = useTranslation("pvoc_saudi_arabia");

  const [importer, setImporter] = useState(false);
  const [exporter, setExporter] = useState(false);
  return (
    <>
      <Head>
        <title>{t("SALEEM/SABER")}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follows" />
      </Head>

      {/* MAIN */}
      <div className={styles.main_container}>
        <h1 className={styles.main_title}>{t("SALEEM/SABER")}</h1>
        <h2 className={styles.second_title}>{t("Définition")}</h2>
        <p className={styles.paragraph}>
          <span className={styles.bold}>{t("SALEEM")}</span>
          {t(
            ": programme de vérification de conformité des produits destinés à être importés en Arabie saoudite. Ce programme couvre tous les types de produits, à l’exception des produits alimentaires, chimiques, cosmétiques, équipements médicaux et produits pharmaceutiques qui relèvent du programme SFDA."
          )}
        </p>
        <br />
        <p className={styles.paragraph}>
          <span className={styles.bold}>{t("SABER")}</span>
          {t(
            ": plateforme développée par le gouvernement saoudien pour simplifier l’enregistrement des demandes et l’obtention des certificats de produits et de certificats d’expédition."
          )}
        </p>
        <h2 className={styles.second_title}>{t("Qui est concerné ?")}</h2>
        <p className={styles.paragraph}>
          {t(
            "Ce programme d’évaluation de la conformité des produits concerne à la fois les importateurs (acheteurs) et les exportateurs (vendeurs), qui ont chacun un rôle à jouer dans l’obtention des certificats nécessaires."
          )}
        </p>
        <div className={styles.concerned_container}>
          <>
            <h3 className={styles.concerned_title}>
              {t("Le rôle de l'importateur")}
            </h3>
            <p className={styles.paragraph}>
              {t(
                "L’importateur est responsable de la première étape. Il doit enregistrer sa commande sur la plateforme Saber."
              )}
            </p>
            <button onClick={() => setImporter(true)} className={styles.button}>
              {t("Ses étapes")}
            </button>
          </>
          <>
            <h3 className={styles.concerned_title}>
              {t("Le rôle de l'exportateur")}
            </h3>
            <p className={styles.paragraph}>
              {t(
                "Une fois l’ID Saber Request obtenu, l’exportateur doit prendre contact avec l’organisme certificateur choisi."
              )}
            </p>
            <button onClick={() => setExporter(true)} className={styles.button}>
              {t("Ses étapes")}
            </button>
            <h2 className={styles.second_title}>
              {t("Quel est votre type d'approbation: 1a, 3 ou 5 ?")}
            </h2>
          </>
        </div>
        <Board />
      </div>

      {/* Modals */}
      {/* Importer */}
      <Modal
        open={importer}
        onClose={() => setImporter(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: 90 + "%",
            maxWidth: 1100,
            height: "max-content",
            maxHeight: 600,
            bgcolor: "background.paper",
            borderRadius: 2,
            padding: 2,
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className={styles.modal_container}>
            <p>
              {t(
                "1. S’il ne l’a pas déjà fait, il doit créer son compte sur la plateforme Saber."
              )}
            </p>
            <br />
            <p>
              {t(
                "2. Il enregistre ensuite les produits qu’il souhaite importer. Pour cela, il doit fournir les informations suivantes pour chaque produit"
              )}
            </p>
            <ul className={styles.list}>
              <li className={styles.list_element}>{t("Code HS")}</li>
              <li className={styles.list_element}>{t("Nom du produit")}</li>
              <li className={styles.list_element}> {t("Numéro de modèle")}</li>
              <li className={styles.list_element}>{t("Nom du fabricant")}</li>
              <li className={styles.list_element}>{t("Pays d’origine")}</li>
              <li className={styles.list_element}>{t("Marque commerciale")}</li>
            </ul>
            <br />
            <br />
            <p>
              {t(
                "3. Il doit choisir un organisme certificateur mandaté dans la liste disponible (la région de l’organisme certificateur doit correspondre à celle de l’exportateur. Par exemple, si l’exportateur est en France, il peut choisir QIMA Europe)."
              )}
            </p>
            <br />
            <br />
            <p>
              {t(
                "4. Par la suite, il recevra l’ID Saber Request, qu’il devra communiquer à l’exportateur."
              )}
            </p>
          </div>
        </Box>
      </Modal>

      {/* Exporter */}
      <Modal
        open={exporter}
        onClose={() => setExporter(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: 90 + "%",
            maxWidth: 1100,
            height: "max-content",
            maxHeight: 600,
            bgcolor: "background.paper",
            borderRadius: 2,
            padding: 2,
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className={styles.modal_container}>
            <p>{t("1. Il doit communiquer les informations suivantes")}</p>
            <ul className={styles.list}>
              <li className={styles.list_element}>{t("Proforma")}</li>
              <li className={styles.list_element}>
                {t("Fiches techniques / descriptives des produits")}
              </li>
              <li className={styles.list_element}> {t("ID Saber Request")}</li>
              <li className={styles.list_element}>
                {t(
                  "Rapports de tests (de préférence issus d’un laboratoire accrédité ISO 17025)."
                )}
              </li>
              <li className={styles.list_element}>
                {t("Certificat de qualité ISO 9001 ou autre")}
              </li>
              <li className={styles.list_element}>
                {t("Photos des produits et des marquages")}
              </li>
            </ul>
            <br />
            <br />
            <p>
              {t(
                "2. Si le type d’approbation doit répondre au schéma 1a, seul un contrôle documentaire est nécessaire. Si le type d’approbation doit répondre aux schémas 3 ou 5, un audit d’une demi-journée doit être effectué par l’organisme certificateur dans l’une des usines de fabrication (l’audit est similaire au contrôle ISO 9001, mais moins intrusif)."
              )}
            </p>
            <br />
            <br />
            <p>
              {t(
                "3. Une fois que toutes les étapes ont été validées par l’organisme certificateur, un certificat produit et un certificat d’expédition seront émis.L’expédition ne peut être effectuée qu’après réception de ces deux certificats"
              )}
            </p>
          </div>
        </Box>
      </Modal>
    </>
  );
}
