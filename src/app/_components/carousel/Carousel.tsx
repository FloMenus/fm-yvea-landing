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
    [];
  });

  return (
    <div className="slider">
      <div className="slide-track">
        <img className="slide" src="/medias/brands/'4b-group.png" />
        <img className="slide" src="/medias/brands/midas.png" />
        <img className="slide" src="/medias/brands/abb.png" />
        <img className="slide" src="/medias/brands/actemium.png" />
        <img className="slide" src="/medias/brands/danube-international.png" />
        <img className="slide" src="/medias/brands/ksb.png" />
        <img className="slide" src="/medias/brands/motus-africa.png" />
        <img className="slide" src="/medias/brands/perenco.png" />
        <img className="slide" src="/medias/brands/promaritime.png" />

        <img className="slide" src="/medias/brands/'4b-group.png" />
        <img className="slide" src="/medias/brands/midas.png" />
        <img className="slide" src="/medias/brands/abb.png" />
        <img className="slide" src="/medias/brands/actemium.png" />
        <img className="slide" src="/medias/brands/danube-international.png" />
        <img className="slide" src="/medias/brands/ksb.png" />
        <img className="slide" src="/medias/brands/motus-africa.png" />
        <img className="slide" src="/medias/brands/perenco.png" />
        <img className="slide" src="/medias/brands/promaritime.png" />

        <img className="slide" src="/medias/brands/'4b-group.png" />
        <img className="slide" src="/medias/brands/midas.png" />
        <img className="slide" src="/medias/brands/abb.png" />
        <img className="slide" src="/medias/brands/actemium.png" />
        <img className="slide" src="/medias/brands/danube-international.png" />
        <img className="slide" src="/medias/brands/ksb.png" />
        <img className="slide" src="/medias/brands/motus-africa.png" />
        {/* <img className="slide" src="/medias/brands/promaritime.png" /> */}
      </div>
    </div>
  );
}
