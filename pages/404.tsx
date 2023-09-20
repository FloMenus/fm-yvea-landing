import { useEffect } from "react";
import Loader from "../_components/loader/Loader";

export default function FourOhFour() {
  useEffect(() => {
    window.location.href = "/";
  }, []);

  return <>{/* <Loader /> */}</>;
}
