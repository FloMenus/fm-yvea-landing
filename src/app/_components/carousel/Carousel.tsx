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
        <img className="slide" src="/medias/brands/midas.png" />
        <img className="slide" src="/medias/brands.assmannpng" />
        <img className="slide" src="/medias/brands/midas.png" />
        <img className="slide" src="/medias/brands/assmann.png" />
        <img className="slide" src="/medias/brands/midas.png" />
        <img className="slide" src="/medias/brands/assmann.png" />
        <img className="slide" src="/medias/brands/midas.png" />
        <img className="slide" src="/medias/brands/assmann.png" />
        <img className="slide" src="/medias/brands/midas.png" />
        <img className="slide" src="/medias/brands/assmann.png" />
        <img className="slide" src="/medias/brands/midas.png" />
        <img className="slide" src="/medias/brands/assmann.png" />
        <img className="slide" src="/medias/brands/midas.png" />
        <img className="slide" src="/medias/brands/assmann.png" />
        <img className="slide" src="/medias/brands/midas.png" />
        <img className="slide" src="/medias/brands/assmann.png" />
        <img className="slide" src="/medias/brands/midas.png" />
        <img className="slide" src="/medias/brands/assmann.png" />
        <img className="slide" src="/medias/brands/midas.png" />
        <img className="slide" src="/medias/brands/assmann.png" />
        <img className="slide" src="/medias/brands/midas.png" />
        <img className="slide" src="/medias/brands/assmann.png" />
      </div>
    </div>
    // <div className="carousel">
    //   {loaded ? (
    //     <>
    //       <div className="swiper-delimitation"></div>
    //       <Swiper
    //         className="swiper"
    //         slidesPerView={5}
    //         spaceBetween={12}
    //         autoplay={{
    //           delay: 1000,
    //           disableOnInteraction: false,
    //         }}
    //         freeMode
    //         modules={[Autoplay]}
    //         loop
    //       >
    //         <SwiperSlide className="swiper-slide">
    //           <img src="/medias/brands/midas.png" alt="earth" loading="lazy" />
    //           <div className="swiper-lazy-preloader"></div>
    //         </SwiperSlide>
    //         <SwiperSlide className="swiper-slide">
    //           <img
    //             src="/medias/brands/assmann.png"
    //             alt="earth"
    //             loading="lazy"
    //           />
    //           <div className="swiper-lazy-preloader"></div>
    //         </SwiperSlide>
    //         <SwiperSlide className="swiper-slide">
    //           <img src="/medias/brands/midas.png" alt="earth" loading="lazy" />
    //           <div className="swiper-lazy-preloader"></div>
    //         </SwiperSlide>
    //         <SwiperSlide className="swiper-slide">
    //           <img
    //             src="/medias/brands/assmann.png"
    //             alt="earth"
    //             loading="lazy"
    //           />
    //           <div className="swiper-lazy-preloader"></div>
    //         </SwiperSlide>
    //         <SwiperSlide className="swiper-slide">
    //           <img src="/medias/brands/midas.png" alt="earth" loading="lazy" />
    //           <div className="swiper-lazy-preloader"></div>
    //         </SwiperSlide>
    //         <SwiperSlide className="swiper-slide">
    //           <img
    //             src="/medias/brands/assmann.png"
    //             alt="earth"
    //             loading="lazy"
    //           />
    //           <div className="swiper-lazy-preloader"></div>
    //         </SwiperSlide>
    //         <SwiperSlide className="swiper-slide">
    //           <img src="/medias/brands/midas.png" alt="earth" loading="lazy" />
    //           <div className="swiper-lazy-preloader"></div>
    //         </SwiperSlide>
    //         <SwiperSlide className="swiper-slide">
    //           <img
    //             src="/medias/brands/assmann.png"
    //             alt="earth"
    //             loading="lazy"
    //           />
    //           <div className="swiper-lazy-preloader"></div>
    //         </SwiperSlide>
    //         <SwiperSlide className="swiper-slide">
    //           <img src="/medias/brands/midas.png" alt="earth" loading="lazy" />
    //           <div className="swiper-lazy-preloader"></div>
    //         </SwiperSlide>
    //         <SwiperSlide className="swiper-slide">
    //           <img
    //             src="/medias/brands/assmann.png"
    //             alt="earth"
    //             loading="lazy"
    //           />
    //           <div className="swiper-lazy-preloader"></div>
    //         </SwiperSlide>
    //         <SwiperSlide className="swiper-slide">
    //           <img src="/medias/brands/midas.png" alt="earth" loading="lazy" />
    //           <div className="swiper-lazy-preloader"></div>
    //         </SwiperSlide>
    //         <SwiperSlide className="swiper-slide">
    //           <img
    //             src="/medias/brands/assmann.png"
    //             alt="earth"
    //             loading="lazy"
    //           />
    //           <div className="swiper-lazy-preloader"></div>
    //         </SwiperSlide>
    //       </Swiper>
    //       <div className="swiper-delimitation"></div>
    //     </>
    //   ) : (
    //     <Loader />
    //   )}
    // </div>
  );
}
