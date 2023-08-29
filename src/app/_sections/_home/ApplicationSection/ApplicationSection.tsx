"use client";
import "./style.css";

import { useEffect, useState } from "react";
import { applicationData, applicationTimer } from "./data";
import NavigationDots from "./NavigationDots/NavgationDots";

export default function ApplicationSection() {
  const [counter, setCounter] = useState(0);
  const [transition, setTransition] = useState("");
  const [intervalId, setIntervalId] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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
      <div className="application_container">
        <div className="application_container_header">
          <h4 className="application_container_header_title">
            Des fonctionnalités par vous, pour vous !{" "}
          </h4>
        </div>
        <div className="application_container_content">
          <div
            className={`application_container_content_left ${
              transition === "start"
                ? "transition_start_left"
                : transition === "end"
                ? "transition_end_left"
                : ""
            }`}
          >
            {applicationData[counter].text.map((text) => (
              <div className={`application_container_content_left_text`}>
                <h5 className="application_container_content_left_title">
                  {text.title}
                </h5>
                <p className="application_container_content_left_paragraph">
                  {text.description}
                </p>
              </div>
            ))}
          </div>
          <img
            className={`application_container_content_img ${
              transition === "start"
                ? "transition_start_right"
                : transition === "end"
                ? "transition_end_right"
                : ""
            }`}
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
