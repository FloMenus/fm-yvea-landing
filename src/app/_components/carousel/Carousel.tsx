"use client";
import "./style.css";
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";

export default function Carousel() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="slider">
      <div className="slide-track">
        <img className="slide" src="/medias/brands/'4b-group.png" alt="brand" />
        <img className="slide" src="/medias/brands/midas.png" alt="brand" />
        <img className="slide" src="/medias/brands/abb.png" alt="brand" />
        <img className="slide" src="/medias/brands/actemium.png" alt="brand" />
        <img
          className="slide"
          src="/medias/brands/danube-international.png"
          alt="brand"
        />
        <img className="slide" src="/medias/brands/ksb.png" alt="brand" />
        <img
          className="slide"
          src="/medias/brands/motus-africa.png"
          alt="brand"
        />
        <img className="slide" src="/medias/brands/perenco.png" alt="brand" />
        <img
          className="slide"
          src="/medias/brands/promaritime.png"
          alt="brand"
        />

        <img className="slide" src="/medias/brands/'4b-group.png" alt="brand" />
        <img className="slide" src="/medias/brands/midas.png" alt="brand" />
        <img className="slide" src="/medias/brands/abb.png" alt="brand" />
        <img className="slide" src="/medias/brands/actemium.png" alt="brand" />
        <img
          className="slide"
          src="/medias/brands/danube-international.png"
          alt="brand"
        />
        <img className="slide" src="/medias/brands/ksb.png" alt="brand" />
        <img
          className="slide"
          src="/medias/brands/motus-africa.png"
          alt="brand"
        />
        <img className="slide" src="/medias/brands/perenco.png" alt="brand" />
        <img
          className="slide"
          src="/medias/brands/promaritime.png"
          alt="brand"
        />

        <img className="slide" src="/medias/brands/'4b-group.png" alt="brand" />
        <img className="slide" src="/medias/brands/midas.png" alt="brand" />
        <img className="slide" src="/medias/brands/abb.png" alt="brand" />
        <img className="slide" src="/medias/brands/actemium.png" alt="brand" />
        <img
          className="slide"
          src="/medias/brands/danube-international.png"
          alt="brand"
        />
        <img className="slide" src="/medias/brands/ksb.png" alt="brand" />
        <img
          className="slide"
          src="/medias/brands/motus-africa.png"
          alt="brand"
        />
        {/* <img className="slide" src="/medias/brands/promaritime.png" /> */}
      </div>
    </div>
  );
}
