"use client";
import "./style.css";
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import Image from "next/image";

export default function Carousel() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="slider">
      <div className="slide-track">
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/4b-group.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/midas.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/abb.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/actemium.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/danube-international.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/ksb.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/motus-africa.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/perenco.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/promaritime.png"
          alt="brand"
        />

        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/4b-group.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/midas.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/abb.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/actemium.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/danube-international.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/ksb.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/motus-africa.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/perenco.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/promaritime.png"
          alt="brand"
        />

        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/4b-group.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/midas.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/abb.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/actemium.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/danube-international.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/ksb.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/motus-africa.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/perenco.png"
          alt="brand"
        />
        <Image
          className="slide"
          width={150}
          height={92}
          src="/medias/brands/promaritime.png"
          alt="brand"
        />
      </div>
    </div>
  );
}
