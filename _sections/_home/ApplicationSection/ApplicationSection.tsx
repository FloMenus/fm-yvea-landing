"use client";
import styles from "./styles.module.css";

import { useEffect, useState } from "react";
import { applicationData, applicationTimer } from "./data";
import NavigationDots from "./NavigationDots/NavgationDots";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ApplicationSection() {
  const [counter, setCounter] = useState(0);
  const [transition, setTransition] = useState("");
  const [intervalId, setIntervalId] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const { t } = useTranslation("common");

  function handleChangeCounter(index?: number) {
    typeof index === "number"
      ? setCounter(index)
      : setCounter((prevCounter) => (prevCounter + 1) % applicationData.length);
  }

  function changeData(index?: number) {
    setIsButtonDisabled(true);
    setTransition("start");
    const chosenIndex = index !== undefined ? index : null;

    setTimeout(() => {
      if (chosenIndex !== null) {
        resetInterval();
        handleChangeCounter(chosenIndex);
      } else {
        handleChangeCounter();
      }
      setTransition("end");
      setIsButtonDisabled(false);
    }, 750);
  }

  const startInterval = () => {
    const id = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1000);
    }, 1000);
    // @ts-ignore
    setIntervalId(id);
  };

  const resetInterval = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      startInterval();
      setTimeElapsed(0);
    }
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, []);

  useEffect(() => {
    if (timeElapsed >= applicationTimer) {
      changeData();
      resetInterval();
    }
  }, [timeElapsed]);

  return (
    <>
      {console.log(counter)}
      {console.log(timeElapsed)}
      <div className={styles.application_container}>
        <div className={styles.application_container_header}>
          <h4 className={styles.application_container_header_title}>
            {t("Des fonctionnalités par vous, pour vous !")}
          </h4>
        </div>
        <div className={styles.application_container_content}>
          <div
            className={`${styles.application_container_content_left} ${
              transition === "start"
                ? styles.transition_start_left
                : transition === "end"
                ? styles.transition_end_left
                : ""
            }`}
          >
            {applicationData[counter].text.map((text) => (
              <div
                className={styles.application_container_content_left_text}
                key={text.title}
              >
                <h5 className={styles.application_container_content_left_title}>
                  {t(text.title)}
                </h5>
                <p
                  className={
                    styles.application_container_content_left_paragraph
                  }
                >
                  {t(text.description)}
                </p>
              </div>
            ))}
          </div>
          <img
            className={`
            ${styles.application_container_content_img}
            ${
              transition === "start"
                ? styles.transition_start_right
                : transition === "end"
                ? styles.transition_end_right
                : ""
            }
            `}
            src={applicationData[counter].image}
            alt="application"
          />
        </div>
        <NavigationDots
          activeIndex={counter}
          onClick={(index) => {
            changeData(index);
          }}
          disabled={isButtonDisabled}
        />
      </div>
    </>
  );
}
