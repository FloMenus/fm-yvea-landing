"use client";
import { useEffect } from "react";
import Loader from "./_components/loader/Loader";

export default function FourOhFour() {
  useEffect(() => {
    // redirect to home page
    window.location.href = "/";
  }, []);

  return (
    <>
      <Loader />
    </>
  );
}
